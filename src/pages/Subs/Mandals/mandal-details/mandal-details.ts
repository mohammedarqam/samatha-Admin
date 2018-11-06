import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-mandal-details',
  templateUrl: 'mandal-details.html',
})
export class MandalDetailsPage {

  mandal = this.navParams.get("mandal");


  
  
  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
  }

}
