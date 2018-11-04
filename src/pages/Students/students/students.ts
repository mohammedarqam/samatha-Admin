import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { StudentDetailsPage } from '../student-details/student-details';
import { DelAnmPage } from '../../Subs/Anms/del-anm/del-anm';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { query } from '@angular/core/src/render3/instructions';

@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {


  anmRef = this.db.list("Students");



  anms : Array<any> = [];
  anmsLoaded : Array<any> = [];

  selArray : Array<any> = [];


  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public modalCtrl : ModalController,
  public menuCtrl : MenuController,
  public navParams: NavParams,
  ) {
    this.menuCtrl.enable(true);
    this.getAnms();

  }

  getAnms(){
    this.anmRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        var temp : any  =snp.payload.val();
        temp.key = snp.key;
        firebase.database().ref("Anm Assigns").child(temp.key).once("value",itemSnap=>{
          temp.Schools = itemSnap.numChildren();
        })
        tempArray.push(temp);
      })
      this.anms = tempArray;
      this.anmsLoaded = tempArray;
    })
  }

  initializeItems(): void {
    this.anms = this.anmsLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.anms = this.anms.filter((v) => {
      if(v.FirstName && q) {
        if (v.FirstName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


addToArr(a){
  switch (a.Checked) {
    case true:  this.selArray.push(a.key);
      break;
    case false:  this.rmFrmArray(a.key);
      break;
  }

}

rmFrmArray(key){
  var ind = this.selArray.indexOf(key);
  this.selArray.splice(ind,1)
}



delMulC(){
  let partnerView = this.modalCtrl.create(DelAnmPage,{delAnms : this.selArray},{enableBackdropDismiss : false});
  partnerView.present();
}












  gtAnmDetails(a){
    this.navCtrl.push(StudentDetailsPage,{anm  :a});
  }



}
