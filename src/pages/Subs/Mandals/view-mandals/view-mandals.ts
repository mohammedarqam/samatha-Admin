import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController, MenuController } from 'ionic-angular';
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

constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl: AlertController,
  public modalCtrl : ModalController,
  public menuCtrl : MenuController,
  public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getAreas();
}

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
        firebase.database().ref("SubsIndex/Mandals").child(snp.key).child("Anms").once("value",anmSnap=>{
          temp.Anms = anmSnap.numChildren();
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
