import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
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

  districts : Array<any> = [];
  districtRef  =this.db.list('Subs/Districts');
  districtSel : string;


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getDistricts();
  }

  getDistricts(){
    this.districtRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        this.districts.push(temp);
      })
    })

  }
  checkData(){
    if(this.name){
      if(this.districtSel){
        this.addCat();
      }else{
        this.presentToast("District Not Selected")
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
      TimeStamp : moment().format()
    }).then(()=>{
      this.close();
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
