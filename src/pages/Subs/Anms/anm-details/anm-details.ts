import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AssignSchoolPage } from '../assign-school/assign-school';
import { EditAnmPage } from '../edit-anm/edit-anm';

@IonicPage()
@Component({
  selector: 'page-anm-details',
  templateUrl: 'anm-details.html',
})
export class AnmDetailsPage {

  anmP = this.navParams.get("anm");
  constructor(
  public navCtrl: NavController, 
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    
  }

  editAnmDetails(){
    let editAnm = this.modalCtrl.create(EditAnmPage,{anm : this.anmP},{enableBackdropDismiss : false});
    editAnm.present();
  }

  assignSchools(){
    this.navCtrl.push(AssignSchoolPage,{anm : this.anmP}); 
  }
}
