import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';

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

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getSchools();
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
  toggleSchools(){
    this.showSchool = !this.showSchool;
  }
  gtSchoolsDetails(s){
    this.navCtrl.push(SchoolDetailsPage,{school : s});
  }

}
