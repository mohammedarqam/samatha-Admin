import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddAmnsPage } from '../add-amns/add-amns';
import { AngularFireDatabase } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-view-amns',
  templateUrl: 'view-amns.html',
})
export class ViewAmnsPage {

  anmRef = this.db.list("Anms");
  anms : Array<any> = [];
  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getAnms();
  }

  getAnms(){
    this.anmRef.snapshotChanges().subscribe(snap=>{
      this.anms = [];
      snap.forEach(snp=>{
        var temp : any  =snp.payload.val();
        temp.key = snp.key;
        console.log(temp)
        this.anms.push(temp);
      })
    })
  }

  gtAddANM(){
    this.navCtrl.push(AddAmnsPage);
  }
}
