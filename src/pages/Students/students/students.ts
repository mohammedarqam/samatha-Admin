import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class StudentsPage {
  pgName = "Students";
  studentsRef = firebase.database().ref("Organisms/Students");


  students: Array<any> = [];
  filteredStudents: any;

  casteSel : string = "all";
  anL : string = "all";
  age : string = "all";
  
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public menuCtrl: MenuController,
    public db: AngularFireDatabase,
    public navParams: NavParams,
  ) {
    this.menuCtrl.enable(true);
  }
  filters = {}





  ngOnInit() {
    this.db.list('Organisms/Students').snapshotChanges()
      .subscribe(itemSnap => {
        itemSnap.forEach(snip => {
          let temp: any = snip.payload.val();
          temp.key = snip.key;
          this.students.push(temp)
        })
        this.applyFilters()
      })
  }

  private applyFilters() {
    this.filteredStudents = _.filter(this.students, _.conforms(this.filters))
  }

  /// filter property by equality to rule
  filterExact(property: string, rule: any) {
    if (rule=="all") this.removeFilter(property)
    else {
    this.filters[property] = val => val == rule
    this.applyFilters()
    }
  }


  /// removes filter
  removeFilter(property: string) {
    delete this.filters[property]
    this[property] = null
    this.applyFilters()
  }

  exporti() {
    let newArea = this.students;
    newArea.forEach(snip => {
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
    saveAs(blob, this.pgName + '.xlsx');

  }






}
