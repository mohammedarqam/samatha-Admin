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

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
      this.getMandal();
      this.getVillage();
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
