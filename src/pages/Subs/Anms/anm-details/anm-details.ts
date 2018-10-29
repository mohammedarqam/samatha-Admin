import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AssignSchoolPage } from '../assign-school/assign-school';

@IonicPage()
@Component({
  selector: 'page-anm-details',
  templateUrl: 'anm-details.html',
})
export class AnmDetailsPage {

  anmP = this.navParams.get("anm");
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.anmP);
    
  }

  assignSchools(){
    this.navCtrl.push(AssignSchoolPage,{anm : this.anmP}); 
  }
}
