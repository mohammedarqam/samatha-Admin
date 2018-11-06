import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AddVillagesPage } from '../add-villages/add-villages';
import { VillageDetailsPage } from '../village-details/village-details';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';


@IonicPage()
@Component({
  selector: 'page-view-villages',
  templateUrl: 'view-villages.html',
})
export class ViewVillagesPage {
  pgName: string = "Villages";
  areaRef = this.db.list('Subs/Villages', ref => ref.orderByChild("Name"));
  area: Array<any> = [];
  areasLoaded: Array<any> = [];



  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
  ) {
    this.getAreas();
  }



  getAreas() {
    this.areaRef.snapshotChanges().subscribe(snap => {
      let tempArray = [];
      snap.forEach(snp => {
        let temp: any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      tempArray.sort(sn => sn.Schools);
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
    let areaAdd = this.modalCtrl.create(AddVillagesPage, null, { enableBackdropDismiss: false });
    areaAdd.present();
  }
  gtVillageDetails(v) {
    this.navCtrl.push(VillageDetailsPage, { village: v });
  }
  exporti() {
    let newArea = this.area;
    newArea.forEach(snip => {
      delete snip.TimeStamp;
      delete snip.key;
      delete snip.Mandal;
      delete snip.Village;
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
    saveAs(blob, this.pgName + '.xlsx');
  
  }
  
}
