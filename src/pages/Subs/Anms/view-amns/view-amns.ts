import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, ModalController } from 'ionic-angular';
import { AddAmnsPage } from '../add-amns/add-amns';
import { AngularFireDatabase } from 'angularfire2/database';
import { AnmDetailsPage } from '../anm-details/anm-details';
import * as firebase from 'firebase';
import { DelAnmPage } from '../del-anm/del-anm';


@IonicPage()
@Component({
  selector: 'page-view-amns',
  templateUrl: 'view-amns.html',
})
export class ViewAmnsPage {

  anmRef = this.db.list("Organisms/Anms");
  anms : Array<any> = [];
  anmsLoaded : Array<any> = [];

  selArray : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public alertCtrl : AlertController,
  public menuCtrl : MenuController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getAnms();
  }

  getAnms(){
    this.anmRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        var temp : any  =snp.payload.val();
        temp.key = snp.key;
        firebase.database().ref("OrganismsIndex").child("Anm Assigns").child(temp.key).once("value",itemSnap=>{
          temp.Schools = itemSnap.val();
        })
        tempArray.push(temp);
      })
      this.anms = tempArray;
      this.anmsLoaded = tempArray;
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
  let partnerView = this.modalCtrl.create(DelAnmPage,{delAnms : this.selArray},{enableBackdropDismiss : false});
  partnerView.present();
}











// clearSel(){
//   console.log(this.anms)
//   this.selArray.forEach(snip=>{
//     var i = this.anms.indexOf(x=> x.key == snip)
//     console.log(i)
//   })
//   console.log(this.selArray)
// }

  gtAnmDetails(a){
    this.navCtrl.push(AnmDetailsPage,{anm  :a});
  }



  gtAddANM(){
    this.navCtrl.push(AddAmnsPage);
  }
}
