import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-assign-school',
  templateUrl: 'assign-school.html',
})
export class AssignSchoolPage {

  anmJ = this.navParams.get("anm");

  mandals: Array<any> = [];
  mandalRef = this.db.list('Subs/Mandals');
  mandalSel: string;

  villages: Array<any> = [];
  villageSel: string;

  schools: Array<any> = [];
  schoolSel: any;

  anmJobRef = this.db.list(`Anm Assigns/${this.anmJ.key}`);
  assignedJobs: Array<any> = [];
  public nVillD: boolean = false;
  public nSchlD: boolean = false;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public navParams: NavParams
  ) {
    console.log(this.nVillD);

    this.getAssignedSchools();
    this.getMandals();
  }



  assignSchool() {
    firebase.database().ref("Anm Assigns").child(this.anmJ.key).push({
      Mandal: this.mandalSel,
      Village: this.villageSel,
      School: this.schoolSel.key,
      SchoolName: this.schoolSel.Name,
    }).then(() => {
      firebase.database().ref("Subs/Schools").child(this.schoolSel.key).child("ANM").set(this.anmJ.key).then(() => {
        firebase.database().ref("SubsIndex/Villages").child(this.villageSel).child("Anms").child(this.anmJ.key).set(true).then(() => {
          firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Anms").child(this.anmJ.key).set(true).then(() => {
            this.presentToast(this.schoolSel.Name + " is assigned to " + this.anmJ.FirstName + " " + this.anmJ.LastName);
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
      this.nVillD = true;
    firebase.database().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value", snap => {
      this.villages = [];
      snap.forEach(snp => {
        firebase.database().ref("Subs/Villages").child(snp.key).once("value", vil => {
          var temp: any = vil.val();
          temp.key = vil.key;
          this.villages.push(temp);

        }).then(() => {
        })
      })
      loading.dismiss();
    })
  }
  getSchools() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Schools ...'
    });
    loading.present();

    firebase.database().ref("SubsIndex/Villages").child(this.villageSel).child("Schools").once("value", snap => {
      this.schools = [];
      if (!snap.exists()) {
        this.nSchlD = true;
      }else{
        this.nSchlD = false;
      }
      snap.forEach(snp => {
        firebase.database().ref("Subs/Schools").child(snp.key).once("value", vil => {
          var temp: any = vil.val();
          temp.key = vil.key;
          if (!temp.ANM) {
            this.schools.push(temp);
          }else{
            
          }
        }).then(() => {
        })
      })
      loading.dismiss();
    })

  }

  clear() {
    this.schoolSel = null;
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: "bottom"

    })
    toast.present();
  }

}
