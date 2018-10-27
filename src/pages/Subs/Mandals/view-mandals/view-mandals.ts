import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddMandalsPage } from '../add-mandals/add-mandals';
import { MandalDetailsPage } from '../mandal-details/mandal-details';

@IonicPage()
@Component({
  selector: 'page-view-mandals',
  templateUrl: 'view-mandals.html',
})
export class ViewMandalsPage {

  areaRef =this.db.list('Subs/Mandals', ref=>ref.orderByChild("Name"));
  area: Array<any> = [];
  areasLoaded: Array<any> = [];

  // selArray : Array<any> = [];

constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl: AlertController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.getAreas();
}

// addToArr(a){
//   switch (a.Checked) {
//     case true:  this.selArray.push(a.key);
//       break;
//     case false:  this.rmFrmArray(a.key);
//       break;
//   }

// }

// rmFrmArray(key){
//   var ind = this.selArray.indexOf(key);
//   this.selArray.splice(ind,1)
// }


getAreas(){
    this.areaRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        firebase.database().ref("SubsIndex/Mandals").child(snp.key).child("Schools").once("value",schoolsSnap=>{
          temp.Schools = schoolsSnap.numChildren();
        })
        firebase.database().ref("SubsIndex/Mandals").child(snp.key).child("Villages").once("value",villageSnap=>{
          temp.Villages = villageSnap.numChildren();
        })
        tempArray.push(temp);
      })
      this.area = tempArray;
      this.areasLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.area = this.areasLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.area = this.area.filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }



  gtAddArea(){
    let areaAdd = this.modalCtrl.create(AddMandalsPage,null,{enableBackdropDismiss : false});
    areaAdd.present();
  }

  gtMandalDetails(a){
    this.navCtrl.push(MandalDetailsPage,{mandal : a});
  }






}
