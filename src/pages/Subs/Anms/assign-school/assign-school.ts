import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';

@IonicPage()
@Component({
  selector: 'page-assign-school',
  templateUrl: 'assign-school.html',
})
export class AssignSchoolPage {

  anmJ = this.navParams.get("anm");

  mandals: Array<any> = [];
  mandalRef = this.db.list('Subs/Mandals', ref=>ref.orderByChild("Name") );
  mandalSel: string;

  villages: Array<any> = [];
  villageSel: string;

  schools: Array<any> = [];
  schoolSel: any;

  anmJobRef = this.db.list(`Organisms/Anm Assigns/${this.anmJ.key}`);
  assignedJobs: Array<any> = [];

  public detSchool : any; 

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase,
    public alertCtrl : AlertController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {
    console.log(this.anmJ)
    this.getAssignedSchools();
    this.getMandals();
  }



  assignSchool() {
    firebase.database().ref("Organisms/Anm Assigns").child(this.anmJ.key).push({
      Mandal: this.mandalSel,
      Village: this.villageSel,
      School: this.schoolSel.key,
      SchoolName: this.schoolSel.Name,
    }).then(() => {
      firebase.database().ref("Subs/Schools").child(this.schoolSel.key).child("ANM").child(this.anmJ.key).set(true).then(() => {
        firebase.database().ref("SubsIndex/Villages").child(this.villageSel).child("Anms").child(this.anmJ.key).set(true).then(() => {
          firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Anms").child(this.anmJ.key).set(true).then(() => {
            this.presentToast(this.schoolSel.Name + " is assigned to " + this.anmJ.Name);
          })
        })
      });
    })
  }


  getAssignedSchools() {
    this.anmJobRef.snapshotChanges().subscribe(snap => {
      this.assignedJobs = [];
      snap.forEach(snip => {
        var temp: any = snip.payload.val();
        temp.key = snip.key;
        this.assignedJobs.push(temp);
      })
    })
  }


  gtSchoolDetails(s){
    firebase.database().ref("Subs").child("Schools").child(s.School).once("value",snap=>{
      var temp : any = snap.val();
      temp.key = snap.key;
      this.detSchool = temp;
    }).then(()=>{
      this.navCtrl.push(SchoolDetailsPage,{school : this.detSchool});
    })
  }
  removeSchoolC(js){
    let alert = this.alertCtrl.create({
      title: 'Unassign School ?',
      message: 'This action cannot be Undone ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.removeSchool(js);
          }
        }
      ]
    });
    alert.present();
  }

  removeSchool(lj){
    console.log(lj)
    console.log(this.anmJ)
    let loading = this.loadingCtrl.create({
      content: 'Loading Villages ...'
    });
    loading.present();

    firebase.database().ref("Organisms/Anm Assigns").child(this.anmJ.key).child(lj.key).remove().then(()=>{
      firebase.database().ref("Subs/Schools").child(lj.School).child("ANM").remove().then(()=>{
        firebase.database().ref("SubsIndex/Mandals").child(lj.Mandal).child("Anms").child(this.anmJ.key).remove().then(()=>{
          firebase.database().ref("SubsIndex/Villages").child(lj.Village).child("Anms").child(this.anmJ.key).remove().then(()=>{
              loading.dismiss();
              this.presentToast("School UnAssigned");
          })
        })
      })
    })
  }










  getMandals() {
    this.mandalRef.snapshotChanges().subscribe(snap => {
      snap.forEach(snp => {
        let temp: any = snp.payload.val();
        temp.key = snp.key;
        this.mandals.push(temp);
      })
    })

  }
  getVillages() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Villages ...'
    });
    loading.present();
    firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value", snap => {
      this.villages = [];
      if(!snap.exists()){
        this.presentToast("No Villages Found");
        loading.dismiss()
      }

      snap.forEach(snp => {
        firebase.database().ref("Subs/Villages").child(snp.key).once("value", vil => {
          var temp: any = vil.val();
          temp.key = vil.key;
          this.villages.push(temp);

        }).then(() => {
          loading.dismiss();
        })
      })
    })
  }
  getSchools() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Schools ...'
    });
    loading.present();

    firebase.database().ref("SubsIndex/Villages").child(this.villageSel).child("Schools").once("value", snap => {
      this.schools = [];
      if(!snap.exists()){
        this.presentToast("No Schools Found");
        loading.dismiss()
      }
      snap.forEach(snp => {
        firebase.database().ref("Subs/Schools").child(snp.key).once("value", vil => {
          var temp: any = vil.val();
          temp.key = vil.key;
          this.schools.push(temp);
        }).then(() => {
          loading.dismiss();
        })
      })
    })

  }



  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "middle"

    })
    toast.present();
  }

}
