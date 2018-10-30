import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VillageDetailsPage } from '../../Villages/village-details/village-details';
import { SchoolDetailsPage } from '../../Schools/school-details/school-details';
import { AnmDetailsPage } from '../../Anms/anm-details/anm-details';
import * as firebase from 'firebase' ;


@IonicPage()
@Component({
  selector: 'page-mandal-details',
  templateUrl: 'mandal-details.html',
})
export class MandalDetailsPage {

  mandal = this.navParams.get("mandal");

  villageRef = this.db.list(`SubsIndex/Mandals/${this.mandal.key}/Villages`)
  villages : Array<any> = [];
  showVillage : boolean = false;

  schoolRef = this.db.list(`SubsIndex/Mandals/${this.mandal.key}/Schools`)
  schools : Array<any> = [];
  showSchool : boolean = false;

  anmRef = this.db.list(`SubsIndex/Mandals/${this.mandal.key}/Anms`)
  anms : Array<any> = [];
  showanms : boolean = false;

  public doughnutChartLabels:string[] = ['Assigned Schools', 'Unassigned Schools'];
  public doughnutChartData:number[] = [0,0];
  public doughnutChartType:string = 'doughnut';
  public doughnutLegend : boolean = true;
  
  uSchuls : number = 0;
  aSchuls : number = 0;
  
  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
    this.getAnms();
    this.getVillages();
    this.getSchools();
    // this.genSchoolChart();
  }

  getVillages(){
    this.villageRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Subs/Villages/${snp.key}`).snapshotChanges().subscribe(snap=>{
          var temp : any = snap.payload.val();
          temp.key = snap.key;
          this.villages.push(temp);
        })
        
      })
    })
  }
  getSchools(){
    this.schoolRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Subs/Schools/${snp.key}`).snapshotChanges().subscribe(snip=>{
          var tempo : any = snip.payload.val();
          tempo.key = snip.key;
          this.schools.push(tempo);
        })
      })
    })
  }

  getAnms(){
    this.anmRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        this.db.object(`Anms/${snp.key}`).snapshotChanges().subscribe(snip=>{
          var tempo : any = snip.payload.val();
          tempo.key = snip.key;
          this.anms.push(tempo);
        })
        
      })
    })
  }

//   genSchoolChart(){
//     this.schoolRef.snapshotChanges().subscribe(snap=>{
//       var allSckls : number = snap.length;
//       snap.forEach(sni=>{
//         firebase.database().ref("Subs/Schools").child(sni.key).once("value",itemSnapshot=>{
//           this.aSchuls = 0; this.uSchuls = 0;
//           if(itemSnapshot.val().ANM){
//             this.aSchuls++;
//           }
//         })
//         console.log(this.uSchuls , allSckls,this.aSchuls)
//       })
//       this.uSchuls = allSckls-this.aSchuls;
//       this.doughnutChartData = [this.aSchuls,this.uSchuls];
// })
  
  // } 






  gtVillageDetails(v){
    this.navCtrl.push(VillageDetailsPage,{village : v});
  }
  gtSchoolsDetails(s){
    this.navCtrl.push(SchoolDetailsPage,{school : s});
  }
  gtAnmDetails(a){
    this.navCtrl.push(AnmDetailsPage,{anm : a});
  }
  toggleVillages(){
    this.showVillage = !this.showVillage;
  }
  toggleSchools(){
    this.showSchool = !this.showSchool;
  }
  toggleAnms(){
    this.showanms = !this.showanms;
  }
}
