import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-village-details',
  templateUrl: 'village-details.html',
})
export class VillageDetailsPage {

  village = this.navParams.get("village");

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
    console.log(this.village);
    
  }


}
