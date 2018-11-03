import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-villages',
  templateUrl: 'add-villages.html',
})
export class AddVillagesPage {
  name : string;
  areaRef = firebase.database().ref("Subs/Villages");

  mandals : Array<any> = [];
  mandalRef  =this.db.list('Subs/Mandals');
  mandalSel : string;

  villRef = this.db.list('Subs/Villages');
  villages : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public loadingCtrl : LoadingController,
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getMandals();
    this.getVillages();
  }

    getMandals(){
    this.mandalRef.snapshotChanges().subscribe(snap=>{
      this.mandals = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        this.mandals.push(temp);
      })
    })
  }

  getVillages(){
    this.villRef.snapshotChanges().subscribe(snap=>{
      this.villages = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        this.villages.push(temp.Name);
      })
    })
  }


  checkData(){
    if(this.name){
        if(this.mandalSel){
          this.checkDataInDb();
        }else{
          this.presentToast("Mandal not Selected");
        }
    }else{  
      this.presentToast("Mandal Name Empty")
    }
  }

  checkDataInDb(){
    if(this.villages.indexOf(this.name)>-1){
      this.presentToast("Village Already Exists")
    }else{
      this.addCat();
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addCat(){
    let loading = this.loadingCtrl.create({
      content: 'Adding Village ...'
    });

    this.areaRef.push({
      Name : this.name,
      Mandal : this.mandalSel,
      TimeStamp : moment().format()
    }).then((res)=>{
        firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").child(res.key).set(true).then(()=>{
          this.close();
          loading.dismiss();
        })
    })
  }

 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"bottom"
    
  })
  toast.present();
}
capsName(name){
  this.name = name.toUpperCase();
}

}
