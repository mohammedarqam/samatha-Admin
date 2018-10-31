import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';
import { AnmDetailsPage } from '../../Anms/anm-details/anm-details';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-village-details',
  templateUrl: 'village-details.html',
})
export class VillageDetailsPage {

  village = this.navParams.get("village");

  schoolRef = this.db.list(`SubsIndex/Villages/${this.village.key}/Schools`)
  schools : Array<any> = [];
  showSchool : boolean = false;

  anmRef = this.db.list(`SubsIndex/Villages/${this.village.key}/Anms`)
  anms : Array<any> = [];
  showAnms : boolean = false;

  mandalName : string;

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getMandal();
    console.log(this.village); 
    this.getSchools();
    this.getAnms();
  }
  getMandal(){
      firebase.database().ref("Subs/Mandals").child(this.village.Mandal).once("value",snap=>{
          this.mandalName = snap.val().Name;
      })    
  }

  getSchools(){
    this.schoolRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Subs/Schools/${snp.key}`).snapshotChanges().subscribe(snap=>{
          var temp : any = snap.payload.val();
          temp.key = snap.key;
          this.schools.push(temp);
        })
        
      })
    })
  }
  getAnms(){
    this.anmRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Anms/${snp.key}`).snapshotChanges().subscribe(snap=>{
          var temp : any = snap.payload.val();
          temp.key = snap.key;
          this.anms.push(temp);
        })
        
      })
    })
  }
  toggleSchools(){
    this.showSchool = !this.showSchool;
  }
  gtSchoolsDetails(s){
    this.navCtrl.push(SchoolDetailsPage,{school : s});
  }
  toggleAnms(){
    this.showAnms = !this.showAnms;
  }
  gtAnmsDetails(a){
    this.navCtrl.push(AnmDetailsPage,{anm : a});
  }

}
