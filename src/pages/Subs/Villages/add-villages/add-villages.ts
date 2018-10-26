import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
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

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getMandals();
  }

    getMandals(){
    this.mandalRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        this.mandals.push(temp);
      })
    })

  }

  checkData(){
    if(this.name){
        if(this.mandalSel){
          this.addCat();
        }else{
          this.presentToast("Mandal not Selected");
        }
    }else{  
      this.presentToast("Mandal Name Empty")
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addCat(){
    this.areaRef.push({
      Name : this.name,
      Mandal : this.mandalSel,
      TimeStamp : moment().format()
    }).then((res)=>{
        firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").child(res.key).set(true).then(()=>{
          this.close();
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
