import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-schools',
  templateUrl: 'add-schools.html',
})
export class AddSchoolsPage {
  name : string;
  areaRef = firebase.database().ref("Subs/Schools");

  mandals : Array<any> = [];
  mandalRef  =this.db.list('Subs/Mandals');
  mandalSel : string;

  villages : Array<any> = [];
  villageSel : string;

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public loadingCtrl : LoadingController,
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
  getVillages(){
    let loading = this.loadingCtrl.create({
      content: 'Loading Villages ...'
    });
    loading.present();

    firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value",snap=>{
      this.villages = [];
      snap.forEach(snp=>{
        firebase.database().ref("Subs/Villages").child(snp.key).once("value",vil=>{
          var temp : any = vil.val();
          temp.key = vil.key;
          this.villages.push(temp);
        }).then(()=>{
          loading.dismiss();
        })
      })
    })

  }

  checkData(){
    if(this.name){
      this.addCat();
    }else{  
      this.presentToast("School Name Empty")
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addCat(){
    let loading = this.loadingCtrl.create({
      content: 'Adding Village ...'
    });
    loading.present();

    this.areaRef.push({
      Name : this.name,
      Mandal : this.mandalSel,
      Village  :this.villageSel,
      TimeStamp : moment().format()
    }).then((res)=>{
        firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Schools").child(res.key).set(true).then(()=>{
          firebase.database().ref("SubsIndex/Villages").child(this.villageSel).child("Schools").child(res.key).set(true).then(()=>{
            this.close();
            loading.dismiss();
          })
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
