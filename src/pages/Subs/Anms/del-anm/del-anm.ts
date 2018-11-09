import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-del-anm',
  templateUrl: 'del-anm.html',
})
export class DelAnmPage {

  anmKeys : Array<any> = this.navParams.get("delAnms");
  anms : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public loadingCtrl : LoadingController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    console.log(this.anmKeys);
    
    this.getSchools();
  }

  getSchools(){
    this.anmKeys.forEach(snp=>{
      firebase.database().ref("Anms").child(snp).once("value",itemSnap=>{
        var temp : any = itemSnap.val();
        temp.key = itemSnap.key;
        this.anms.push(temp)
      })
      console.log(this.anms);
    })
  }


  deleteAnms(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    this.anmKeys.forEach(snip=>{
      firebase.database().ref("Anms").child(snip).remove();
    })
    this.close();
    loading.dismiss();
    this.presentToast("ANMs Deleted");
  }

  close(){
    this.viewCtrl.dismiss();
  }

  presentToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'middle'
    });
  }

}
