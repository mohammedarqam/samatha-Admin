import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {


mandals  : number = 0;
villages  : number = 0;
schools  : number = 0;
students  : number = 0;

mandalsRef = this.db.list("Subs/Mandals");
villagesRef = this.db.list("Subs/Villages");
schoolsRef = this.db.list("Subs/Schools");



  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getMandals();
      this.getVillages();
      this.getSchools();
    }
    
    getMandals(){
      this.mandalsRef.snapshotChanges().subscribe(snap=>{
        this.mandals= snap.length;
      })
    }
    getVillages(){
      this.villagesRef.snapshotChanges().subscribe(snap=>{
        this.villages = snap.length;
      })
    }
    getSchools(){
      this.schoolsRef.snapshotChanges().subscribe(snap=>{
        this.schools = snap.length;
      })
    }
}
