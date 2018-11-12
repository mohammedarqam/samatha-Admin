import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-student',
  templateUrl: 'edit-student.html',
})
export class EditStudentPage {

  student = this.navParams.get("Student");

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,  
  public navParams: NavParams
  ) {
    console.log(this.student)    
  }


}
