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
    this.geMandals();
  }
  mandalsArray: Array<any> = ["Amarachinta", "Atmakur", "Chinnamabavi", "Ghanpur", "Gopalpet", "Kothakota", "Madanapur", "Pangal", "Pebbair", "Peddamandadi", "Revally", "SriRangapur", "Veepanagandla", "Wanaparthy"]

  //Villages Array
  Amarachinta: Array<any> = ["Amarachintha", "Masthipur", "Mulamallu", "Nandimullu", "Nagal Kadmoor", "Erladinne"];
  Atmakur: Array<any> = ["Atmakur", "Balakistapur", "Thippadampally", "Motlampally", "Rechinthala",];
  Chinnamabavi: Array<any> = ["Koppunur", "Veltoor", "Ayyavaripally", "Bekkem", "Gudem", "Gaddabaswapuram", "Kalluru", "Chellapadu", "Velagonda", "Peddamaroor", "Peddadagada", "Chinnadagada",]
  Ghanpur: Array<any> = ["Ghanpur A", "Appireddypally", "Manajipet", "Malkapur", "Solipur", "Upparpally", "Kamuluddinpoor", "Agaram", "Almaipaipally", "Mamidimada",]
  Gopalpet: Array<any> = ["Thadiparthy", "Gopalpet", "Buddaram", "Yedutla", "Edulla", "Jayanna Thirmalapur", "Munnanur", "Chennur",]
  Kothakota: Array<any> = ["Kothakota", "Vaddevata", "Kanimetta", "Palem", "Amadabakula", "Sankireddypally", "Apparala", "Pamapuram", "Mirasipally", "Natavelly",]
  Madanapur: Array<any> = ["Madanapur", "Konnur", "Ajjakollu", "Duppally", "Gopanapet",]
  Pangal: Array<any> = ["Remaddula","Shakapur","Kadirepadu","Kethepally","Vengalaipally","Jamapur","Bandapally","Mahammadapur","Chinthakunta","Busireddypally","Rainpally","Chikkapally","Annaram Tanda","Annaram","Bhavaji","Pangal","Goplapur",]
  Pebbair: Array<any> = ["Pebbair", "Shagapur", "Kanchiraopally", "Rangapur", "Ayyavaripally", "Pathepally", "Gumadam", "Yaparla", "Chelimilla", "Sugoor",]
  Peddamandadi: Array<any> = ["Manigilla", "Jagathpally", "Pamireddypally", "Veeraipally", "Balijepally", "Dondaguntapally", "Gatlakhanapur", "Peddamandadi", "Mojarla", "Madigatla", "Veltoor",]
  Revally: Array<any> = ["Chennaram", "Chirkapally", "Bandaravipakula", "Revally", "Keshampeta", "Chakalapally", "Polikepadu", "Thalupunuru", "Nagapur",]
  SriRangapur: Array<any> = ["Srirangapur", "Venkatapur", "Narsingaipally", "Venkatapur (S)", "Thatipamula", "Kambalapur",]
  Veepanagandla: Array<any> = ["Veepanagandla", "Govardanagiri", "Sanginenipally", "Thoomukunta", "Pulgarcherla", "Gopaldinne", "Kalvarala", "Bollaram",]
  Wanaparthy: Array<any> = ["Wanaparthy", "Rajanagaram", "Chandapur", "Savaigudem", "Nagavaram", "Marrikunta", "Rajapeta", "Peddagudem", "Kadukunta", "Kistagiri", "Chimanguntally", "Chityala", "Appaipally", "Khashimnagar",]



  geMandals() {
    firebase.database().ref("Subs/Mandals").once("value", itemSnap => {
      itemSnap.forEach(snip => {
        var temp = snip.val();
        temp.key = snip.key;
        console.log(temp);
      })
    })
  }


  UploadMandals() {
    this.mandalsArray.forEach(manSnip => {
      firebase.database().ref("Subs/Mandals").push({
        Name: manSnip,
        TimeStamp: moment().format()
      }).then(() => {
        console.log("Mandals Uploaded");
      })

    })
  }

  areaRef = firebase.database().ref("Subs/Villages");

  Amarachintakey = "-LQruugyyNOpTn5WunYM";
  AtmakurKey = "-LQruuh8MWUNs4IUUTEh";
  ChinnamabaviKey ="-LQruuhAikqfU1K1wh0T" ;
  GhanpurKey ="-LQruuhBtxfvbQEdwG4n" ;
  GopalpetKey = "-LQruuhD3aC_qpEtIs6N";
  KothakotaKey = "-LQruuhEljPcYszSXeHl";
  MadanapurKey ="-LQruuhFnFh7BG0oOXWj" ;
  PangalKey ="-LQruuhGdcBhYTVLyBnV" ;
  PebbairKey ="-LQruuhHLnLMHCxw0h8v" ;
  PeddamandadiKey ="-LQruuhHLnLMHCxw0h8w";
  RevallyKey ="-LQruuhIYoGREgjZWbBb" ;
  SriRangapurKey ="-LQruuhIYoGREgjZWbBc";
  VeepanagandlaKey ="-LQruuhJZQvV1iXFSPLK";
  WanaparthyKey ="-LQruuhKjEYRqgn75PZn" ;

uploadVills(){
  this.UploadAmarachinta();
  this.UploadAtmakur();
  this.UploadChinnamabavi();
  this.UploadGhanpur();
  this.UploadGopalpet();
  this.UploadKothakota();
  this.UploadMadanapur();
  this.UploadPangal();
  this.UploadPebbair();
  this.UploadPeddamandadi();
  this.UploadRevally();
  this.UploadSriRangapur() ;
  this.UploadVeepanagandla();
  this.UploadWanaparthy() ;
}

  UploadAmarachinta() { this.Amarachinta.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.Amarachintakey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.Amarachintakey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadAtmakur() { this.Atmakur.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.AtmakurKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.AtmakurKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadChinnamabavi() { this.Chinnamabavi.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.ChinnamabaviKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.ChinnamabaviKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadGhanpur() { this.Ghanpur.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.GhanpurKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.GhanpurKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadGopalpet() { this.Gopalpet.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.GopalpetKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.GopalpetKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadKothakota() { this.Kothakota.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.KothakotaKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.KothakotaKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadMadanapur() { this.Madanapur.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.MadanapurKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.MadanapurKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadPangal() { this.Pangal.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.PangalKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.PangalKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadPebbair() { this.Pebbair.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.PebbairKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.PebbairKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadPeddamandadi() { this.Peddamandadi.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.PeddamandadiKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.PeddamandadiKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadRevally() { this.Revally.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.RevallyKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.RevallyKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadSriRangapur() { this.SriRangapur.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.SriRangapurKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.SriRangapurKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadVeepanagandla() { this.Veepanagandla.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.VeepanagandlaKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.VeepanagandlaKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }
  UploadWanaparthy() { this.Wanaparthy.forEach(er => { this.areaRef.push({ Name: er, Mandal: this.WanaparthyKey, TimeStamp: moment().format() }).then((res) => { firebase.database().ref("SubsIndex/Mandals").child(this.WanaparthyKey).child("Villages").child(res.key).set(true).then(() => { }).then(() => { console.log("Villages Added"); }) }) }) }





}


