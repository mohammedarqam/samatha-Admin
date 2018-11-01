import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {

  student  = this.navParams.get("anm");
  
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }




}
