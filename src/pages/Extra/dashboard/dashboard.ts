import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { ViewMandalsPage } from '../../Subs/Mandals/view-mandals/view-mandals';
import { ViewVillagesPage } from '../../Subs/Villages/view-villages/view-villages';
import { ViewSchoolsPage } from '../../Subs/Schools/view-schools/view-schools';
import { ViewAmnsPage } from '../../Subs/Anms/view-amns/view-amns';
import { StudentDetailsPage } from '../../Students/student-details/student-details';

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
anms  : number = 0;

mandalsRef = this.db.list("Subs/Mandals");
villagesRef = this.db.list("Subs/Villages");
schoolsRef = this.db.list("Subs/Schools");
anmsRef = this.db.list("Anms");
studentRef = this.db.list("Students");

uSchuls : number = 0;
aSchuls : number = 0;

public doughnutChartLabels:string[] = ['Assigned Schools', 'Unassigned Schools'];
public doughnutChartData:number[] = [0,0];
public doughnutChartType:string = 'doughnut';
public doughnutLegend : boolean = true;

  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getMandals();
      this.getVillages();
      this.getSchools();
      this.getAnms();
      // this.gtStudents();
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
        this.uSchuls = 0; this.aSchuls = 0;
        this.schools = snap.length;
        snap.forEach(snip=>{
          var temp : any = snip.payload.val();
          if(temp.ANM){
            this.aSchuls++;
          }
        })
        this.uSchuls = this.schools - this.aSchuls;
        this.doughnutChartData = [this.aSchuls,this.uSchuls];
      })
    }
    getAnms(){
      this.anmsRef.snapshotChanges().subscribe(snap=>{
        this.anms= snap.length;
      })
    }
    // getStudents(){
    //   this.studentRef.snapshotChanges().subscribe(snap=>{
    //     this.students= snap.length;
    //   })
    // }
    public chartClicked(e:any):void {
      console.log(e);
    }
    
    public chartHovered(e:any):void {
      console.log(e);
    }


    gtMandals(){
      this.navCtrl.push(ViewMandalsPage);
    }
    gtVillages(){
      this.navCtrl.push(ViewVillagesPage);
    }
    gtSchools(){
      this.navCtrl.push(ViewSchoolsPage);
    }
    gtAnms(){
      this.navCtrl.push(ViewAmnsPage);
    }
    gtStudents(){
      this.navCtrl.push(StudentDetailsPage);
    }

    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['Severely Anaemic', 'Moderately Anaemic', 'Mildly Anaemic', 'Healthy'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    
    public barChartData:any[] = [
      {data: [65, 59, 80, 81], label: 'Anaemia Progress'},
    ];
    
    public chartClicked1(e:any):void {
      console.log(e);
    }
    
    public chartHovered1(e:any):void {
      console.log(e);
    }
  }
