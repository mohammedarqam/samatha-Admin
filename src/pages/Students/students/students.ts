import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {

  studentsRef = firebase.database().ref("Students");
  
  casteSel : string;
  anL  :string;

  students: Array<any>=[];
  filteredStudents: any;
  
  
  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public menuCtrl : MenuController,
  public db : AngularFireDatabase,
  public navParams: NavParams,
  ) {
    this.menuCtrl.enable(true);
  }
  filters = {}

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

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }



  // getStudents(){
  //   this.studentsRef.orderByChild("Severity").equalTo(this.anL).orderByChild("Community").equalTo(this.casteSel).once("value",itemSnapshot=>{
  //     this.anms = [];
  //     itemSnapshot.forEach(itemSnap=>{
  //       this.anms.push(itemSnap.val())
  //       console.log(itemSnap.val())
  //     })
  //   })
  // }

}
