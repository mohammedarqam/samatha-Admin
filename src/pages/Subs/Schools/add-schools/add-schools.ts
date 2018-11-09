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
  name : string="";


  areaRef = firebase.database().ref("Subs/Schools");

  mandals : Array<any> = [];
  mandalRef  =this.db.list('Subs/Mandals');
  mandalSel : string;

  villages : Array<any> = [];
  villageSel : string;

  schoolRef =this.db.list('Subs/Schools');
  schools : Array<any> = [];

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public db : AngularFireDatabase,
  public loadingCtrl : LoadingController,
  public navParams: NavParams
  ) {
    this.getMandals();
    this.getSchools();
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
    
    firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").orderByChild("Name").once("value",snap=>{
      this.villages = [];
      if(snap.exists()){
      snap.forEach(snp=>{
        firebase.database().ref("Subs/Villages").child(snp.key).once("value",vil=>{
          var temp : any = vil.val();
          temp.key = vil.key;
          this.villages.push(temp);
          this.villages.reverse();
        }).catch((er)=>{
          console.log(er);
        }) .then(()=>{
          loading.dismiss();
        })
      })
    }else{
      loading.dismiss();
      this.presentToast("No Villages Found")
    }
    })
  }
  

  getSchools(){
    this.schoolRef.snapshotChanges().subscribe(snap=>{
      this.schools = [];
      snap.forEach(snip=>{
        var temp : any =  snip.payload.val();
        temp.key  = snip.key;
        this.schools.push(temp.Name);
      })
    })
  }

  checkData(){
    if(this.name){
        this.checkDataInDb();
    }else{  
      this.presentToast("School Name Empty")
    }
  }
  checkDataInDb(){
    if(this.schools.indexOf(this.name)>-1){
      this.presentToast("School Already Exists")
    }else{
      this.addCat();
    }
  }
  close(){
    this.viewCtrl.dismiss();
  }

  addCat(){
    let loading = this.loadingCtrl.create({
      content: 'Adding School ...'
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
    position :"middle"
    
  })
  toast.present();
}
capsName(name){
  this.name = name.toUpperCase();
}

}
