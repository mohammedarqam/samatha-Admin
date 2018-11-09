import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-data-upload',
  templateUrl: 'data-upload.html',
})
export class DataUploadPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams
  ) {
  }
  mandalsArray : Array<any> = ["AMARCHINTA","Atmakur","Chinnamabavi","Ghanpur","Gopalpet","Kothakota","Madanapur","Pangal","Pebbair","Peddamandadi","Revally","","Veepanagandla","Wanaparthy"]


  UploadMandals(){
    console.log(this.mandalsArray)
    this.mandalsArray.forEach(manSnip=>{
      firebase.database().ref("Subs/Mandals").push({
        Name : manSnip,
        TimeStamp : moment().format()
      }).then(()=>{
        console.log("Done");
      })

    })
  }
}
