import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddVillagesPage } from '../add-villages/add-villages';
import { VillageDetailsPage } from '../village-details/village-details';


@IonicPage()
@Component({
  selector: 'page-view-villages',
  templateUrl: 'view-villages.html',
})
export class ViewVillagesPage {

  areaRef =this.db.list('Subs/Villages', ref=>ref.orderByChild("Name"));
  area: Array<any> = [];
  areasLoaded: Array<any> = [];

  allRef = this.areaRef;

  mandals : Array<any> =[];
  selMandal : string;

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl: AlertController,
  public modalCtrl : ModalController,
  public navParams: NavParams,
  public menuCtrl : MenuController,
  ) {
    this.getMandals();
    this.getAreas();
  }

  mandalFilter(m){
    console.log(m)
  }


  getAreas(){
    this.allRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        firebase.database().ref("SubsIndex/Villages").child(snp.key).child("Schools").once("value",schoolsSnap=>{
          temp.Schools = schoolsSnap.numChildren();
        })
        firebase.database().ref("SubsIndex/Villages").child(snp.key).child("Anms").once("value",anmSnap=>{
          temp.Anms = anmSnap.numChildren();
        })
        tempArray.push(temp);
      })
      tempArray.sort(sn=>sn.Schools);
      tempArray.reverse();
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

  getMandals(){
    this.db.list("Subs/Mandals", ref=>ref.orderByChild("Name")).snapshotChanges().subscribe(itemSnap=>{
      itemSnap.forEach(snap=>{
        var temp : any = snap.payload.val();
        temp.key = snap.key;
        this.mandals.push(temp);
      })
    })
  }


  gtAddArea(){
    let areaAdd = this.modalCtrl.create(AddVillagesPage,null,{enableBackdropDismiss : false});
    areaAdd.present();
  }
  gtVillageDetails(v){
    this.navCtrl.push(VillageDetailsPage,{village : v});
  }

}
