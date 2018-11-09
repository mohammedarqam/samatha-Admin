import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Chip } from 'ionic-angular';
import * as firebase from 'firebase';
import { StudentDetailsPage } from '../../../Students/student-details/student-details';

@IonicPage()
@Component({
  selector: 'page-school-details',
  templateUrl: 'school-details.html',
})
export class SchoolDetailsPage {

  school = this.navParams.get("school");
  mandalName :  string;
  vName : string;

  anms: Array<any>=[];
  students: Array<any>=[];


  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.school)
      this.getMandal();
      this.getVillage();
      this.getAnms();
      this.getStudents();
  }

  getAnms(){
    firebase.database().ref("Subs/Schools").child(this.school.key).child("ANM").once("value",itemSnap=>{
      itemSnap.forEach(item=>{
        firebase.database().ref("Organisms/Anms").child(item.key).once("value",ssSnip=>{
          var temp : any = ssSnip.val();
          temp.key = ssSnip.key;
          this.anms.push(temp);
        })
      })
    })
  }
  getStudents(){
    firebase.database().ref("SubsIndex/Schools").child(this.school.key).child("Students").once("value",itemSnapshot=>{
      itemSnapshot.forEach(itemSnap=>{
        console.log(itemSnap.key)
        firebase.database().ref("Organisms/Students").child(itemSnap.key).once("value",itemSna=>{
          let temp  : any = itemSna.val();
          temp.key = itemSna.key;
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
          this.students.push(temp);

        })
      })
    })
  }
  gtStudentDetails(a){
    this.navCtrl.push(StudentDetailsPage,{student : a})
  }

  getMandal(){
    firebase.database().ref("Subs/Mandals").child(this.school.Mandal).once("value",itemSnap=>{
      this.mandalName = itemSnap.val().Name;
    })
  }
  getVillage(){
    firebase.database().ref("Subs/Villages").child(this.school.Village).once("value",itemSnap=>{
      this.vName = itemSnap.val().Name;
    })
  }

}
