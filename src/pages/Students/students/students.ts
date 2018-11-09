import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';
import { StudentDetailsPage } from '../student-details/student-details';


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  pgName = "Students";
  studentsRef = firebase.database().ref("Organisms/Students");


  students: Array<any> = [];
  filteredStudents: any;

  mandals : Array<any>=[];
  villages : Array<any>=[];
  schools : Array<any>=[];

  mandalSel = "all";
  villageSel = "all";
  schoolSel = "all";

  casteSel : string = "all";
  anL : string = "all";
  age : string = "all";
  clSel : string = 'all';
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public db: AngularFireDatabase,
    public loadingCtrl : LoadingController,
    public navParams: NavParams,
  ) {
    this.menuCtrl.enable(true);
  }
  filters = {}





  ngOnInit() {
    this.db.list('Organisms/Students').snapshotChanges()
      .subscribe(itemSnap => {
        itemSnap.forEach(snip => {
          let temp: any = snip.payload.val();
          temp.key = snip.key;
          switch (temp.Severity) {
            case 'Severely Anaemic': temp.colori = "s"
              break;
            case 'Moderately Anaemic': temp.colori = "mo"
              break;
            case 'Mildly  Anaemic': temp.colori = "mi"
              break;
            case 'Healthy': temp.colori = "h"
              break;
        }

          firebase.database().ref("Subs/Schools").child(temp.Schools).once("value",s=>{
            temp.SchoolName = s.val().Name;
          })
          firebase.database().ref("Subs/Villages").child(temp.Village).once("value",s=>{
            temp.VillageName = s.val().Name;
          })
          firebase.database().ref("Subs/Mandals").child(temp.Mandal).once("value",s=>{
            temp.MandalName = s.val().Name;
          })
          firebase.database().ref("Organisms/Anms").child(temp.ANM).once("value",s=>{
            temp.ANMName = s.val().Name;
          })
          this.students.push(temp)
        })
        
        this.applyFilters()
      })
      this.getMandals();
      this.getVillages();
      this.getSchools();
    }

  private applyFilters() {
    this.filteredStudents = _.filter(this.students, _.conforms(this.filters))
    console.log(this.filteredStudents);
  }

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    if (rule=="all") this.removeFilter(property)
    else {
    this.filters[property] = val => val == rule
    this.applyFilters()
    }
  }


  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

  exporti() {
    let newArea = this.students;
    newArea.forEach(snip => {
      delete snip.key;
    })
    let sheet = XLSX.utils.json_to_sheet(newArea);
    let wb = {
      SheetNames: ["export"],
      Sheets: {
        "export": sheet
      }
    };

    let wbout = XLSX.write(wb, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    });

    function s2ab(s) {
      let buf = new ArrayBuffer(s.length);
      let view = new Uint8Array(buf);
      for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }

    let blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    let self = this;
    saveAs(blob, this.pgName + '.xlsx');

  }


  gtStudentDetails(a){
    this.navCtrl.push(StudentDetailsPage,{student : a})
  }


  checkMandal(){
    if(this.mandalSel=="all"){
      this.getMandals();
      this.getVillages();
      this.getSchools();
      this.villageSel = "all";
      this.schoolSel = "all";
    }else{
      this.manWiseVills();
    }
  }
  manWiseVills(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.db.list(`SubsIndex/Mandals/${this.mandalSel}/Villages`, ref=>ref.orderByChild("Name"))
    .snapshotChanges().subscribe(itemSnap=>{
      this.villages =[];
      itemSnap.forEach(item=>{
        firebase.database().ref("Subs/Villages/").child(item.key).orderByChild("Name").once("value",iSnap=>{
          var temp : any = iSnap.val();
          temp.key = iSnap.val();
          console.log(temp);
          this.villages.push(temp); 
        }).then(()=>{

          this.db.list(`SubsIndex/Mandals/${this.mandalSel}/Schools`, ref=>ref.orderByChild("Name"))
          .snapshotChanges().subscribe(itemSnap=>{
            this.schools =[];
            itemSnap.forEach(item=>{
              firebase.database().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value",iSnap=>{
                var temp : any = iSnap.val();
                temp.key = iSnap.val();
                console.log(temp);
                this.schools.push(temp); 
              }).then(()=>{
                loading.dismiss();
              })
            })
          })


        })
      })
    })
  }

  checkVillage(){
    if(this.villageSel=="all"){
      this.getVillages();
      this.getSchools();
      this.schoolSel = "all";
    }else{
      this.schoolSel = "all";
      this.villWiseVills();
    }
  }
  villWiseVills(){
    console.log(this.villageSel)
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });


          this.db.list(`SubsIndex/Villages/${this.villageSel}/Schools`, ref=>ref.orderByChild("Name"))
          .snapshotChanges().subscribe(itemSnap=>{
            this.schools =[];
            itemSnap.forEach(item=>{
              firebase.database().ref("Subs/Schools/").child(item.key).orderByChild("Name").once("value",iSnap=>{
                var temp : any = iSnap.val();
                temp.key = iSnap.val();
                console.log(temp);
                this.schools.push(temp); 
              }).then(()=>{
                loading.dismiss();
              })
            })
          })


  }





  //originals
  getMandals(){
    this.db.list("Subs/Mandals", ref=>ref.orderByChild("Name"))
    .snapshotChanges().subscribe(itemSnap=>{
      this.mandals =[];
      itemSnap.forEach(item=>{
        var temp : any = item.payload.val();
        temp.key = item.key;
        this.mandals.push(temp);
      })
    })
  }

  getVillages(){
    this.db.list("Subs/Villages", ref=>ref.orderByChild("Name"))
    .snapshotChanges().subscribe(itemSnap=>{
      this.villages =[];
      itemSnap.forEach(item=>{
        var temp : any = item.payload.val();
        temp.key = item.key;
        this.villages.push(temp);
      })
    })
  }

  getSchools(){
    this.db.list("Subs/Schools", ref=>ref.orderByChild("Name"))
    .snapshotChanges().subscribe(itemSnap=>{
      this.schools =[];
      itemSnap.forEach(item=>{
        var temp : any = item.payload.val();
        temp.key = item.key;
        this.schools.push(temp);
      })
    })
  }



}
