import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-school-details',
  templateUrl: 'school-details.html',
})
export class SchoolDetailsPage {

  school = this.navParams.get("school");

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.school);
    
  }



}
