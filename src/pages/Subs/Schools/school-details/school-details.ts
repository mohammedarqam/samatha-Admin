import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

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


  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.school)
      this.getMandal();
      this.getVillage();
      this.getAnms();
  }

  getAnms(){
    firebase.database().ref("Subs/Schools").child(this.school.key).child("ANM").once("value",itemSnap=>{
      itemSnap.forEach(item=>{
        firebase.database().ref("Organisms/Anms").child(item.key).once("value",ssSnip=>{
          var temp : any = ssSnip.val();
          temp.key = ssSnip.key;
          this.anms.push(temp);
          console.log(temp)
        })
      })
    })
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
