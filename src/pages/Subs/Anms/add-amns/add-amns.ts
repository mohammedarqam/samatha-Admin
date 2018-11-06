import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { ViewAmnsPage } from '../view-amns/view-amns';

@IonicPage()
@Component({
  selector: 'page-add-amns',
  templateUrl: 'add-amns.html',
})
export class AddAmnsPage {
  

  adminEmail : string;
  adminPass : string;

  name : string;
  gender : string;
  email : string='';
  phone : string;
  pass : string;
  cPass : string;


  samePasses : boolean = false;



  constructor(
  public navCtrl: NavController, 
  public loadingCtrl : LoadingController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    this.getAdmin();
  }
  getAdmin(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    
    var adminId = firebase.auth().currentUser.uid;
    firebase.database().ref("Admin Data/Admins").child(adminId).once("value",snap=>{
      this.adminEmail = snap.val().Email;
      this.adminPass = snap.val().Password;
    }).catch((err)=>{
      var e = err;
      this.presentToast(e)
      loading.dismiss();
    }).then(()=>{
      loading.dismiss();
    })
  }
    checkData(){

    }




    checkPasses(){
      if(this.pass.length){
        if(this.cPass){
          if(this.pass===this.cPass){
            this.samePasses = true;
         }else{this.samePasses = false;}
        }else{this.samePasses = false;}
      }else{this.samePasses = false;}
    }

    addAnm(){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      var genEmail = this.phone + "@samatha.anm";
      firebase.auth().createUserWithEmailAndPassword(genEmail,this.pass).then(()=>{
        firebase.database().ref("Organisms").child("Anms").child(firebase.auth().currentUser.uid).set({
          Name : this.name,
          Gender : this.gender,
          Email : this.email,
          Phone : this.phone,
          Password : this.pass,
        }).then(()=>{
          firebase.auth().signInWithEmailAndPassword(this.adminEmail,this.adminPass).then(()=>{
            this.presentToast("ANM Added Successfully !");
          }).then(()=>{
            this.navCtrl.setRoot(ViewAmnsPage);
            loading.dismiss()
          })
        })
      })
    }


    presentToast(msg){
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
    }

  }
