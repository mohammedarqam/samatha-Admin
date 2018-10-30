import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { AddAmnsPage } from '../add-amns/add-amns';
import { AngularFireDatabase } from 'angularfire2/database';
import { AnmDetailsPage } from '../anm-details/anm-details';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-view-amns',
  templateUrl: 'view-amns.html',
})
export class ViewAmnsPage {

  anmRef = this.db.list("Anms");
  anms : Array<any> = [];
  anmsLoaded : Array<any> = [];

  selArray : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public alertCtrl : AlertController,
  public menuCtrl : MenuController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getAnms();
  }

  getAnms(){
    this.anmRef.snapshotChanges().subscribe(snap=>{
      this.anms = [];
      snap.forEach(snp=>{
        var temp : any  =snp.payload.val();
        temp.key = snp.key;
        firebase.database().ref("Anm Assigns").child(temp.key).once("value",itemSnap=>{
          temp.Schools = itemSnap.numChildren();
        })
        this.anms.push(temp);
      })
    })
  }

  initializeItems(): void {
    this.anms = this.anmsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.anms = this.anms.filter((v) => {
      if(v.FirstName && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


addToArr(a){
  switch (a.Checked) {
    case true:  this.selArray.push(a.key);
      break;
    case false:  this.rmFrmArray(a.key);
      break;
  }

}

rmFrmArray(key){
  var ind = this.selArray.indexOf(key);
  this.selArray.splice(ind,1)
}



delMulC(){
  let alert = this.alertCtrl.create({
    title: 'Delete '+this.selArray.length+' ANMs?',
    message: this.selArray[0].Name,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          this.delMul();
        }
      }
    ]
  });
  alert.present();
}


delMul(){

}











  gtAnmDetails(a){
    this.navCtrl.push(AnmDetailsPage,{anm  :a});
  }



  gtAddANM(){
    this.navCtrl.push(AddAmnsPage);
  }
}
