import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  pageName="Dashboard";
  districtSel = "Wanaparthy";



  mandals : Array<any> = [];
  mandalSel = "All";
  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
    this.menuCtrl.enable(true);
    this.getMandals();
  }
    
  getMandals(){
    this.db.list("Subs/Mandals", ref=>ref.orderByChild("Name"))
    .snapshotChanges().subscribe(itemSnap=>{
      this.mandals =[];
      itemSnap.forEach(item=>{
        var temp : any = item.payload.val();
        temp.key = item.key;
        this.mandals.push(temp);
      })
    })
  }




  }