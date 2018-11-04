import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  pageName="Dashboard";
  districtSel = "Wanaparthy";



  mandals : Array<any> = [];
  villages : Array<any> = [];
  schools : Array<any> = [];

  mandalSel : string;
  villageSel : string = "All";
  schoolSel : string= "All";



  casteSel : string;
  anL  :string;

  students: Array<any>=[];
  filteredStudents: Array<any>=[];
  filters = {}

  

  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
    this.menuCtrl.enable(true);
    this.getMandals();
    this.getVillages();
    this.getSchools();
  }
  ngOnInit() {
    this.db.list('Students').snapshotChanges()
      .subscribe(itemSnap => {
        itemSnap.forEach(snip=>{
          let temp : any = snip.payload.val();
          temp.key= snip.key;
          console.log(temp);
          this.students.push(temp)
        })
        this.applyFilters()
    })
  }

  private applyFilters() {
    this.filteredStudents = _.filter(this.students, _.conforms(this.filters) )
  }

  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

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

  // manWiseVills(){
  //   this.db.list(`SubsIndex/Mandals/${this.mandalSel}/Villages`, ref=>ref.orderByChild("Name"))
  //   .snapshotChanges().subscribe(itemSnap=>{
  //     this.villages =[];
  //     itemSnap.forEach(item=>{
  //       firebase.database().ref("Subs/Villages/").child(item.key).orderByChild("Name").once("value",iSnap=>{
  //         var temp : any = iSnap.val();
  //         temp.key = iSnap.val();
  //         this.villages.push(temp); 
  //       })
  //     })
  //   })
  // }




  }