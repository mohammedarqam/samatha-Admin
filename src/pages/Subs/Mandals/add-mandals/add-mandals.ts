import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-add-mandals',
  templateUrl: 'add-mandals.html',
})
export class AddMandalsPage {

  name : string;
  areaRef = firebase.database().ref("Subs/Mandals");

  mandals : Array<any> = []


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public loadingCtrl : LoadingController,
  public navParams: NavParams
  ) {
    this.getAreas();
  }

  checkData(){
    if(this.name){
      this.checkDataInDB();
    }else{  
      this.presentToast("Mandal Name Empty")
    }
  }

  checkDataInDB(){
    if(this.mandals.indexOf(this.name)>-1){
      this.presentToast("Mandal Already Exists")
    }else{
      this.addCat();
    }
  }
  addCat(){
    let loading = this.loadingCtrl.create({
      content: 'Adding Mandal ...'
    });
    loading.present();
    this.areaRef.push({
      Name : this.name,
      TimeStamp : moment().format()
    }).then(()=>{
      this.close();
      loading.dismiss()
    })
  }



getAreas(){
    this.areaRef.once("value",snap=>{
      this.mandals = []
      snap.forEach(snp=>{
        this.mandals.push(snp.val().Name);
      })
      console.log(this.mandals);
    })
  }



//Support Functions

  close(){
    this.viewCtrl.dismiss();
  }
 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"middle"
    
  })
  toast.present();
}
capsName(name){
  this.name = name.toUpperCase();
}

}
