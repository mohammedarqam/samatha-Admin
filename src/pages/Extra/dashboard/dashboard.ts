import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

districts  : number = 0;
mandals  : number = 0;
villages  : number = 0;
schools  : number = 0;
students  : number = 0;

districtsRef = this.db.list("Subs/Districts");
mandalsRef = this.db.list("Subs/Mandals");
villagesRef = this.db.list("Subs/Villages");
schoolsRef = this.db.list("Subs/Schools");
// studentsRef = this.db.list("Subs/");



  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getDistricts();
      this.getMandals();
      this.getVillages();
      this.getSchools();
    }
    
    getDistricts(){
      this.districtsRef.snapshotChanges().subscribe(snap=>{
        this.districts = snap.length;
      })
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
    // get(){
    //   this..snapshotChanges().subscribe(snap=>{
    //     this. = snap.length;
    //   })
    // }

}
