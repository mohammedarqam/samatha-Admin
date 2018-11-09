import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddMandalsPage } from '../add-mandals/add-mandals';
import { MandalDetailsPage } from '../mandal-details/mandal-details';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';


@IonicPage()
@Component({
  selector: 'page-view-mandals',
  templateUrl: 'view-mandals.html',
})
export class ViewMandalsPage {
  pageName = "Mandals";

  areaRef = this.db.list('Subs/Mandals');
  area: Array<any> = [];
  areasLoaded: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public navParams: NavParams
  ) {
    this.menuCtrl.enable(true);
    this.getAreas();
  }
  getAreas() {
    this.areaRef.snapshotChanges().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snp => {
        let temp: any = snp.payload.val();
        temp.key = snp.key;
        var severeRef = firebase.database().ref("Counters/Mandals").child(snp.key).child("Severity");
        severeRef.child("Severely Anaemic").once("value",svereSnap=>{temp.Severe = svereSnap.numChildren();})
        severeRef.child("Moderately Anaemic").once("value",svereSnap=>{temp.Moderate = svereSnap.numChildren();})
        severeRef.child("Mildly  Anaemic").once("value",svereSnap=>{temp.Mildly = svereSnap.numChildren();})
        severeRef.child("Healthy").once("value",svereSnap=>{temp.Healthy = svereSnap.numChildren();})
        tempArray.push(temp);
      })
      this.area = tempArray;
      this.areasLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.area = this.areasLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.area = this.area.filter((v) => {
      if (v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }



  gtAddArea() {
    let areaAdd = this.modalCtrl.create(AddMandalsPage, null, { enableBackdropDismiss: false });
    areaAdd.present();
  }

  gtMandalDetails(a) {
    this.navCtrl.push(MandalDetailsPage, { mandal: a });
  }


  exporti() {
    let newArea = this.area;
    newArea.forEach(snip => {
      delete snip.TimeStamp;
      delete snip.key;
    })
    let sheet = XLSX.utils.json_to_sheet(newArea);
    let wb = {
      SheetNames: ["export"],
      Sheets: {
        "export": sheet
      }
    };

    let wbout = XLSX.write(wb, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    });

    function s2ab(s) {
      let buf = new ArrayBuffer(s.length);
      let view = new Uint8Array(buf);
      for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }

    let blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    let self = this;
    saveAs(blob, this.pageName + '.xlsx');

  }

  prnt(){
    window.print();
    return false;
  }
}
