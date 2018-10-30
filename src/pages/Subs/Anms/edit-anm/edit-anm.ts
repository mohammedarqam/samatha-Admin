import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-anm',
  templateUrl: 'edit-anm.html',
})
export class EditAnmPage {

  anm = this.navParams.get("anm");

  fName = this.anm.FirstName;
  lName = this.anm.LastName;
  gender = this.anm.Gender;
  phone = this.anm.Phone;


  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
    console.log(this.anm);
  }










checkData(){
  if(this.fName){
    if(this.lName){
      if(this.gender){
        if(this.phone.length!=10){
          this.updateANM();
        }else(this.presentToast("Phone Empty not Valid"))
      }else(this.presentToast("Select Gender"))
    }else{this.presentToast("Last Name Empty")}
  }else{this.presentToast("First Name Empty")}
}

updateANM(){
  if(this.fName!=this.anm.FirstName){
    console.log("changeFName");
  }
  if(this.lName!=this.anm.LastName){
    console.log("changeLName");
  }
  if(this.gender!=this.anm.Gender){
    console.log("cahnge Gender");
  }
  if(this.phone!=this.anm.Phone){
    console.log("ChangePhone");
    
  }
}

oldANM(){
  console.log(this.anm);
}

  close(){
    this.viewCtrl.dismiss();
  }
 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"bottom"
    
  })
  toast.present();
}

}
