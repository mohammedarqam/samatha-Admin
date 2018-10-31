webpackJsonp([19],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAmnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_amns_add_amns__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anm_details_anm_details__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__del_anm_del_anm__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewAmnsPage = /** @class */ (function () {
    function ViewAmnsPage(navCtrl, db, alertCtrl, menuCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.anmRef = this.db.list("Anms");
        this.anms = [];
        this.anmsLoaded = [];
        this.selArray = [];
        this.menuCtrl.enable(true);
        this.getAnms();
    }
    ViewAmnsPage.prototype.getAnms = function () {
        var _this = this;
        this.anmRef.snapshotChanges().subscribe(function (snap) {
            _this.anms = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("Anm Assigns").child(temp.key).once("value", function (itemSnap) {
                    temp.Schools = itemSnap.numChildren();
                });
                _this.anms.push(temp);
            });
        });
    };
    ViewAmnsPage.prototype.initializeItems = function () {
        this.anms = this.anmsLoaded;
    };
    ViewAmnsPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.anms = this.anms.filter(function (v) {
            if (v.FirstName && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewAmnsPage.prototype.addToArr = function (a) {
        switch (a.Checked) {
            case true:
                this.selArray.push(a.key);
                break;
            case false:
                this.rmFrmArray(a.key);
                break;
        }
    };
    ViewAmnsPage.prototype.rmFrmArray = function (key) {
        var ind = this.selArray.indexOf(key);
        this.selArray.splice(ind, 1);
    };
    ViewAmnsPage.prototype.delMulC = function () {
        var partnerView = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__del_anm_del_anm__["a" /* DelAnmPage */], { delAnms: this.selArray }, { enableBackdropDismiss: false });
        partnerView.present();
    };
    // clearSel(){
    //   console.log(this.anms)
    //   this.selArray.forEach(snip=>{
    //     var i = this.anms.indexOf(x=> x.key == snip)
    //     console.log(i)
    //   })
    //   console.log(this.selArray)
    // }
    ViewAmnsPage.prototype.gtAnmDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    ViewAmnsPage.prototype.gtAddANM = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_amns_add_amns__["a" /* AddAmnsPage */]);
    };
    ViewAmnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-amns',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\view-amns\view-amns.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4 >\n\n    <ion-item no-lines class="content">\n\n    <h1 class="title" item-start>ANM</h1>\n\n    </ion-item>\n\n    </ion-col>\n\n    <ion-col col-6 push-2 >\n\n    <ion-searchbar item-end animated="true" placeholder="Search an ANM.." \n\n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid>\n\n      <ion-navbar color="primary">\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-checkbox ></ion-checkbox>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Name</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Progress </p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Phone No.</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Schools</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-navbar>\n\n    </ion-grid>\n\n\n\n    <button ion-button float-right color="light" *ngIf="selArray.length" (click)="clearSel()">Clear Selection</button>\n\n\n\n    <ion-grid>\n\n        <ion-card *ngFor="let a of anms;let i = index">\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-1  >\n\n              <ion-checkbox [(ngModel)]="a.Checked" (ionChange)="addToArr(a)" ></ion-checkbox>  \n\n            </ion-col>\n\n            <ion-col col-1  >\n\n              <p ion-text><strong>{{i+1}}</strong></p>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              {{a.FirstName}}&nbsp;{{a.LastName}}\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">null </h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">{{a.Phone}} </h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">{{a.Schools}}</h1>\n\n              <button ion-button  clear>View</button>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n            <button ion-button clear (click)="gtAnmDetails(a)">Details\n\n              <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n\n            </button>\n\n            </ion-col>\n\n\n\n\n\n\n\n          </ion-row>\n\n        </ion-card-content>\n\n        </ion-card>\n\n    </ion-grid>    \n\n\n\n\n\n    <ion-fab right bottom *ngIf="!selArray.length">\n\n      <button ion-fab color="primary" (click)="gtAddANM()" >\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n\n\n    <ion-fab right bottom *ngIf="selArray.length">\n\n      <button ion-fab color="danger" (click)="delMulC()" >\n\n        <ion-icon name="md-trash"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\view-amns\view-amns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewAmnsPage);
    return ViewAmnsPage;
}());

//# sourceMappingURL=view-amns.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Schools_school_details_school_details__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Anms_anm_details_anm_details__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VillageDetailsPage = /** @class */ (function () {
    function VillageDetailsPage(navCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.village = this.navParams.get("village");
        this.schoolRef = this.db.list("SubsIndex/Villages/" + this.village.key + "/Schools");
        this.schools = [];
        this.showSchool = false;
        this.anmRef = this.db.list("SubsIndex/Villages/" + this.village.key + "/Anms");
        this.anms = [];
        this.showAnms = false;
        this.getMandal();
        console.log(this.village);
        this.getSchools();
        this.getAnms();
    }
    VillageDetailsPage.prototype.getMandal = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("Subs/Mandals").child(this.village.Mandal).once("value", function (snap) {
            _this.mandalName = snap.val().Name;
        });
    };
    VillageDetailsPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Subs/Schools/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.schools.push(temp);
                });
            });
        });
    };
    VillageDetailsPage.prototype.getAnms = function () {
        var _this = this;
        this.anmRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Anms/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.anms.push(temp);
                });
            });
        });
    };
    VillageDetailsPage.prototype.toggleSchools = function () {
        this.showSchool = !this.showSchool;
    };
    VillageDetailsPage.prototype.gtSchoolsDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    VillageDetailsPage.prototype.toggleAnms = function () {
        this.showAnms = !this.showAnms;
    };
    VillageDetailsPage.prototype.gtAnmsDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Anms_anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    VillageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-village-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\village-details\village-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>{{village.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-8>\n\n      <ion-item>\n\n        <h2 item-start ion-text color="primary">Mandal</h2>\n\n        <h2 item-end >{{mandalName}} </h2>\n\n      </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n<ion-col col-6>\n\n  <ion-card>\n\n    <ion-navbar color="primary" (click)="toggleSchools()" class="curs" >\n\n      <ion-title>Schools</ion-title>\n\n      <ion-buttons end>\n\n      <button ion-button large clear>{{village.Schools}}</button>\n\n      <button ion-button clear icon-only  *ngIf="!showSchool" (click)="toggleSchools()">\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </button>\n\n      <button ion-button clear icon-only  *ngIf="showSchool" (click)="toggleSchools()">\n\n        <ion-icon name="ios-arrow-up"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-card-content *ngIf="showSchool" >\n\n      <ion-item *ngFor="let s of schools" >\n\n        <button item-start clear ion-button color="dark" large>{{s.Name}}</button>\n\n        <button ion-button item-end clear (click)="gtSchoolsDetails(s)" >Details</button>\n\n      </ion-item>\n\n    </ion-card-content>\n\n\n\n\n\n  </ion-card>\n\n</ion-col>\n\n</ion-row>\n\n\n\n\n\n\n\n<ion-row>\n\n<ion-col col-6>\n\n  <ion-card>\n\n    <ion-navbar color="primary" (click)="toggleAnms()" class="curs" >\n\n      <ion-title>Anms</ion-title>\n\n      <ion-buttons end>\n\n      <button ion-button large clear>{{village.Anms}}</button>\n\n      <button ion-button clear icon-only  *ngIf="!showAnms" (click)="toggleAnms()">\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </button>\n\n      <button ion-button clear icon-only  *ngIf="showAnms" (click)="toggleAnms()">\n\n        <ion-icon name="ios-arrow-up"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-card-content *ngIf="showAnms" >\n\n      <ion-item *ngFor="let a of anms" >\n\n        <button item-start clear ion-button color="dark" large>{{a.FirstName}}</button>\n\n        <button ion-button item-end clear (click)="gtAnmsDetails(a)" >Details</button>\n\n      </ion-item>\n\n    </ion-card-content>\n\n\n\n\n\n  </ion-card>\n\n</ion-col>\n\n</ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\village-details\village-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], VillageDetailsPage);
    return VillageDetailsPage;
}());

//# sourceMappingURL=village-details.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, db, menuCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.menuCtrl = menuCtrl;
        this.mandals = 0;
        this.villages = 0;
        this.schools = 0;
        this.students = 0;
        this.anms = 0;
        this.mandalsRef = this.db.list("Subs/Mandals");
        this.villagesRef = this.db.list("Subs/Villages");
        this.schoolsRef = this.db.list("Subs/Schools");
        this.anmsRef = this.db.list("Anms");
        this.uSchuls = 0;
        this.aSchuls = 0;
        this.doughnutChartLabels = ['Assigned Schools', 'Unassigned Schools'];
        this.doughnutChartData = [0, 0];
        this.doughnutChartType = 'doughnut';
        this.doughnutLegend = true;
        this.menuCtrl.enable(true);
        this.getMandals();
        this.getVillages();
        this.getSchools();
        this.getAnms();
    }
    DashboardPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalsRef.snapshotChanges().subscribe(function (snap) {
            _this.mandals = snap.length;
        });
    };
    DashboardPage.prototype.getVillages = function () {
        var _this = this;
        this.villagesRef.snapshotChanges().subscribe(function (snap) {
            _this.villages = snap.length;
        });
    };
    DashboardPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolsRef.snapshotChanges().subscribe(function (snap) {
            _this.uSchuls = 0;
            _this.aSchuls = 0;
            _this.schools = snap.length;
            snap.forEach(function (snip) {
                var temp = snip.payload.val();
                if (temp.ANM) {
                    _this.aSchuls++;
                }
            });
            _this.uSchuls = _this.schools - _this.aSchuls;
            _this.doughnutChartData = [_this.aSchuls, _this.uSchuls];
        });
    };
    DashboardPage.prototype.getAnms = function () {
        var _this = this;
        this.anmsRef.snapshotChanges().subscribe(function (snap) {
            _this.anms = snap.length;
        });
    };
    DashboardPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n  <ion-buttons end>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <p ion-text color="whiter">{{adminName}} </p>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-item no-lines class="content">\n\n<h1 class="title">DASHBOARD</h1>\n\n</ion-item>\n\n\n\n<ion-grid>\n\n<ion-row>\n\n\n\n<ion-col col-2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p class="mNum">{{mandals}}</p>\n\n      <p  class="mText">Mandals</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n<ion-col col-2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p class="mNum">{{villages}}</p>\n\n      <p  class="mText">Villages</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n<ion-col col-2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p class="mNum">{{schools}}</p>\n\n      <p  class="mText">Schools</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n<ion-col col-2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p class="mNum">{{anms}}</p>\n\n      <p  class="mText">ANMs</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n<ion-col col-2>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <p class="mNum">{{students}}</p>\n\n      <p  class="mText">Students</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-col>\n\n\n\n\n\n</ion-row>\n\n<ion-row>\n\n  <ion-col col-6>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-card-title color="primary">Schools Status</ion-card-title>\n\n        <div style="display: block">\n\n          <canvas baseChart\n\n                      [data]="doughnutChartData"\n\n                      [labels]="doughnutChartLabels"\n\n                      [legend]="doughnutLegend"\n\n                      [chartType]="doughnutChartType"\n\n                      (chartHover)="chartHovered($event)"\n\n                      (chartClick)="chartClicked($event)"></canvas>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, menuCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = [];
        this.menuCtrl.enable(false);
    }
    LoginPage.prototype.checkData = function () {
        if (this.email) {
            if (this.pass) {
                this.login();
            }
            else {
                this.presentToast("Password Not Provided");
            }
        }
        else {
            this.presentToast("Email Not Provided");
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging In...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.pass).then(function () {
            loading.dismiss();
        }).catch(function (e) {
            var err = e.message;
            _this.presentToast(err);
            loading.dismiss();
        });
    };
    LoginPage.prototype.notAdmin = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.presentToast("You are not an Admin");
            _this.email = null;
            _this.pass = null;
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "top",
            showCloseButton: false,
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\login\login.html"*/'<ion-content padding>\n\n  <div class="bg-main">\n\n  </div>\n\n\n\n  <ion-slides>\n\n    <ion-slide>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <h1 class="signinTitle">Sign In to Samatha Admin</h1>\n\n\n\n          <ion-item>\n\n            <ion-label color="whiter" fixed>Email</ion-label>\n\n            <ion-input type="email" (keyup.enter)="checkData()"  [(ngModel)]="email" autofocus ></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="whiter" fixed>Password</ion-label>\n\n            <ion-input type="password" (keyup.enter)="checkData()"  [(ngModel)]="pass"></ion-input>\n\n          </ion-item>\n\n\n\n          <button ion-button color="primary"  (click)="checkData()">Login</button>\n\n        </ion-card-content>\n\n\n\n\n\n</ion-card>\n\n  </ion-slide>\n\n</ion-slides>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Extra\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentsPage = /** @class */ (function () {
    function StudentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentsPage');
    };
    StudentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-students',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\students\students.html"*/'<!--\n\n  Generated template for the StudentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>students</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\students\students.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StudentsPage);
    return StudentsPage;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAmnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_amns_view_amns__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAmnsPage = /** @class */ (function () {
    function AddAmnsPage(navCtrl, loadingCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.lName = '';
        this.email = '';
        this.samePasses = false;
        this.getAdmin();
    }
    AddAmnsPage.prototype.getAdmin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var adminId = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Admin Data/Admins").child(adminId).once("value", function (snap) {
            _this.adminEmail = snap.val().Email;
            _this.adminPass = snap.val().Password;
        }).catch(function (err) {
            var e = err;
            _this.presentToast(e);
            loading.dismiss();
        }).then(function () {
            loading.dismiss();
        });
    };
    AddAmnsPage.prototype.checkData = function () {
    };
    AddAmnsPage.prototype.checkPasses = function () {
        if (this.pass.length) {
            if (this.cPass) {
                if (this.pass === this.cPass) {
                    this.samePasses = true;
                }
                else {
                    this.samePasses = false;
                }
            }
            else {
                this.samePasses = false;
            }
        }
        else {
            this.samePasses = false;
        }
    };
    AddAmnsPage.prototype.addAnm = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var genEmail = this.phone + "@samatha.anm";
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().createUserWithEmailAndPassword(genEmail, this.pass).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anms").child(__WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid).set({
                FirstName: _this.fName,
                LastName: _this.lName,
                Gender: _this.gender,
                Email: _this.email,
                Phone: _this.phone,
                Password: _this.pass,
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(_this.adminEmail, _this.adminPass).then(function () {
                    _this.presentToast("ANM Added Successfully !");
                }).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__view_amns_view_amns__["a" /* ViewAmnsPage */]);
                    loading.dismiss();
                });
            });
        });
    };
    AddAmnsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
    };
    AddAmnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-amns',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\add-amns\add-amns.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Add ANMs</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  {{samePasses}}\n\n  <ion-card class="mainCard" >\n\n  <ion-card-content>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>First Name</ion-label>\n\n    <ion-input type="text" autofocus [(ngModel)]="fName" ></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Last Name</ion-label>\n\n    <ion-input type="text" [(ngModel)]="lName" ></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n  <ion-label stacked>Gender</ion-label>\n\n  <ion-select [(ngModel)]="gender">\n\n    <ion-option value="Male">Male</ion-option>\n\n    <ion-option value="Female">Female</ion-option>\n\n    <ion-option value="Other">Other</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Phone Number</ion-label>\n\n    <ion-input type="number" [(ngModel)]="phone"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Password</ion-label>\n\n    <ion-input type="text" (ionChange)="checkPasses()" [(ngModel)]="pass"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Confirm Password</ion-label>\n\n    <ion-input type="text" (ionChange)="checkPasses()" [(ngModel)]="cPass"></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  <button ion-button round (click)="addAnm()">Add Anm</button>\n\n\n\n  \n\n  </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\add-amns\add-amns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddAmnsPage);
    return AddAmnsPage;
}());

//# sourceMappingURL=add-amns.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignSchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AssignSchoolPage = /** @class */ (function () {
    function AssignSchoolPage(navCtrl, toastCtrl, db, alertCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.anmJ = this.navParams.get("anm");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals');
        this.villages = [];
        this.schools = [];
        this.anmJobRef = this.db.list("Anm Assigns/" + this.anmJ.key);
        this.assignedJobs = [];
        this.nVillD = false;
        this.nSchlD = false;
        this.getAssignedSchools();
        this.getMandals();
    }
    AssignSchoolPage.prototype.assignSchool = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anm Assigns").child(this.anmJ.key).push({
            Mandal: this.mandalSel,
            Village: this.villageSel,
            School: this.schoolSel.key,
            SchoolName: this.schoolSel.Name,
        }).then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(_this.schoolSel.key).child("ANM").set(_this.anmJ.key).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(_this.villageSel).child("Anms").child(_this.anmJ.key).set(true).then(function () {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.mandalSel).child("Anms").child(_this.anmJ.key).set(true).then(function () {
                        _this.presentToast(_this.schoolSel.Name + " is assigned to " + _this.anmJ.FirstName + " " + _this.anmJ.LastName);
                    });
                });
            });
        });
    };
    AssignSchoolPage.prototype.getAssignedSchools = function () {
        var _this = this;
        this.anmJobRef.snapshotChanges().subscribe(function (snap) {
            _this.assignedJobs = [];
            snap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.assignedJobs.push(temp);
            });
        });
    };
    AssignSchoolPage.prototype.gtSchoolDetails = function (s) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs").child("Schools").child(s.School).once("value", function (snap) {
            var temp = snap.val();
            temp.key = snap.key;
            _this.detSchool = temp;
        }).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: _this.detSchool });
        });
    };
    AssignSchoolPage.prototype.removeSchoolC = function (js) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Unassign School ?',
            message: 'This action cannot be Undone ',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        _this.removeSchool(js);
                    }
                }
            ]
        });
        alert.present();
    };
    AssignSchoolPage.prototype.removeSchool = function (lj) {
        var _this = this;
        console.log(lj);
        console.log(this.anmJ);
        var loading = this.loadingCtrl.create({
            content: 'Loading Villages ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anm Assigns").child(this.anmJ.key).child(lj.key).remove().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(lj.School).child("ANM").remove().then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(lj.Mandal).child("Anms").child(_this.anmJ.key).remove().then(function () {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(lj.Village).child("Anms").child(_this.anmJ.key).remove().then(function () {
                        loading.dismiss();
                        _this.presentToast("School UnAssigned");
                    });
                });
            });
        });
    };
    AssignSchoolPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.mandals.push(temp);
            });
        });
    };
    AssignSchoolPage.prototype.getVillages = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Villages ...'
        });
        loading.present();
        this.nVillD = true;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value", function (snap) {
            _this.villages = [];
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    _this.villages.push(temp);
                }).then(function () {
                });
            });
            loading.dismiss();
        });
    };
    AssignSchoolPage.prototype.getSchools = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Schools ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(this.villageSel).child("Schools").once("value", function (snap) {
            _this.schools = [];
            if (!snap.exists()) {
                _this.nSchlD = true;
            }
            else {
                _this.nSchlD = false;
            }
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    if (!temp.ANM) {
                        _this.schools.push(temp);
                    }
                    else {
                    }
                }).then(function () {
                });
            });
            loading.dismiss();
        });
    };
    AssignSchoolPage.prototype.clear = function () {
        this.schoolSel = null;
    };
    AssignSchoolPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "bottom"
        });
        toast.present();
    };
    AssignSchoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-assign-school',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\assign-school\assign-school.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Schools Assignments</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-item no-lines class="content">\n\n          <h1 class="title" item-start>{{anmJ.FirstName}}&nbsp;{{anmJ.LastName}}</h1>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title color="primary">Current Schools</ion-card-title>\n\n            <ion-item *ngFor="let j of assignedJobs" >\n\n              <p item-start>{{j.SchoolName}} </p>\n\n              <ion-buttons end>\n\n                <button ion-button clear (click)="gtSchoolDetails(j)">Details</button>\n\n                <button ion-button color="danger" clear (click)="removeSchoolC(j)">Remove</button>\n\n              </ion-buttons>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n\n\n            <ion-card-title color="primary" >Assign School</ion-card-title>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Select Mandal</ion-label>\n\n              <ion-select [(ngModel)]="mandalSel" (ionChange)="getVillages()">\n\n                <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="nVillD">\n\n              <p ion-text color="danger"> No Villages Found</p>\n\n            </ion-item>\n\n            <ion-item *ngIf="villages.length">\n\n              <ion-label floating>Select Village</ion-label>\n\n              <ion-select [(ngModel)]="villageSel" (ionChange)="getSchools()">\n\n                <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}} </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n\n\n            <ion-item *ngIf="nSchlD && !schools.length">\n\n              <p ion-text color="danger"> No Schools Found</p>\n\n            </ion-item>\n\n            <ion-item *ngIf="schools.length">\n\n              <ion-label floating>Select School</ion-label>\n\n              <ion-select [(ngModel)]="schoolSel">\n\n                <ion-option *ngFor="let s of schools" [value]="s">{{s.Name}} </ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n\n\n            <button ion-button *ngIf="schoolSel" float-right (click)="assignSchool()">Assign</button>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\assign-school\assign-school.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AssignSchoolPage);
    return AssignSchoolPage;
}());

//# sourceMappingURL=assign-school.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAnmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditAnmPage = /** @class */ (function () {
    function EditAnmPage(navCtrl, viewCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.anm = this.navParams.get("anm");
        this.fName = this.anm.FirstName;
        this.lName = this.anm.LastName;
        this.gender = this.anm.Gender;
        this.phone = this.anm.Phone;
        console.log(this.anm);
    }
    EditAnmPage.prototype.checkData = function () {
        if (this.fName) {
            if (this.lName) {
                if (this.gender) {
                    if (this.phone.length != 10) {
                        this.updateANM();
                    }
                    else
                        (this.presentToast("Phone Empty not Valid"));
                }
                else
                    (this.presentToast("Select Gender"));
            }
            else {
                this.presentToast("Last Name Empty");
            }
        }
        else {
            this.presentToast("First Name Empty");
        }
    };
    EditAnmPage.prototype.updateANM = function () {
        if (this.fName != this.anm.FirstName) {
            console.log("changeFName");
        }
        if (this.lName != this.anm.LastName) {
            console.log("changeLName");
        }
        if (this.gender != this.anm.Gender) {
            console.log("cahnge Gender");
        }
        if (this.phone != this.anm.Phone) {
            console.log("ChangePhone");
        }
    };
    EditAnmPage.prototype.oldANM = function () {
        console.log(this.anm);
    };
    EditAnmPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EditAnmPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "bottom"
        });
        toast.present();
    };
    EditAnmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-anm',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\edit-anm\edit-anm.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Edit ANM</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear icon-only (click)="close()">\n\n        <ion-icon name="md-close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides>\n\n    <ion-slide>\n\n      <ion-card>\n\n        <ion-card-content>\n\n          <button ion-button (click)="oldANM()">Old Get</button>\n\n          <ion-item>\n\n            <ion-label floating>First Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="fName"  autofocus></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Last Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="lName"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Gender</ion-label>\n\n            <ion-select [(ngModel)]="gender">\n\n              <ion-option value="Male">Male</ion-option>\n\n              <ion-option value="Female">Female</ion-option>\n\n              <ion-option value="Other">Other</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label floating>Phone</ion-label>\n\n            <ion-input type="number" [(ngModel)]="phone"></ion-input>\n\n          </ion-item>\n\n          <button ion-button (click)="checkData()">Update</button>\n\n\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\edit-anm\edit-anm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], EditAnmPage);
    return EditAnmPage;
}());

//# sourceMappingURL=edit-anm.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelAnmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DelAnmPage = /** @class */ (function () {
    function DelAnmPage(navCtrl, viewCtrl, loadingCtrl, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.anmKeys = this.navParams.get("delAnms");
        this.anms = [];
        console.log(this.anmKeys);
        this.getSchools();
    }
    DelAnmPage.prototype.getSchools = function () {
        var _this = this;
        this.anmKeys.forEach(function (snp) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anms").child(snp).once("value", function (itemSnap) {
                var temp = itemSnap.val();
                temp.key = itemSnap.key;
                _this.anms.push(temp);
            });
            console.log(_this.anms);
        });
    };
    DelAnmPage.prototype.deleteAnms = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.anmKeys.forEach(function (snip) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anms").child(snip).remove();
        });
        this.close();
        loading.dismiss();
        this.presentToast("ANMs Deleted");
    };
    DelAnmPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DelAnmPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
    };
    DelAnmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-del-anm',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\del-anm\del-anm.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Delete ANMs</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button clear (click)="close()">Cancel</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides>\n\n    <ion-slide>\n\n\n\n\n\n  <ion-card >\n\n    <ion-card-content>\n\n\n\n      <ion-item *ngFor="let a of anms">\n\n          {{a.FirstName}}&nbsp;{{a.LastName}}\n\n      </ion-item>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button color="danger"  (click)="deleteAnms()">Delete</button>\n\n\n\n</ion-slide>\n\n</ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\del-anm\del-anm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DelAnmPage);
    return DelAnmPage;
}());

//# sourceMappingURL=del-anm.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMandalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMandalsPage = /** @class */ (function () {
    function AddMandalsPage(navCtrl, viewCtrl, db, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals");
        this.mandals = [];
        this.getAreas();
    }
    AddMandalsPage.prototype.checkData = function () {
        if (this.name) {
            this.checkDataInDB();
        }
        else {
            this.presentToast("Mandal Name Empty");
        }
    };
    AddMandalsPage.prototype.checkDataInDB = function () {
        if (this.mandals.indexOf(this.name) > -1) {
            this.presentToast("Mandal Already Exists");
        }
        else {
            this.addCat();
        }
    };
    AddMandalsPage.prototype.addCat = function () {
        var _this = this;
        this.areaRef.push({
            Name: this.name,
            TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
        }).then(function () {
            _this.close();
        });
    };
    AddMandalsPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.once("value", function (snap) {
            _this.mandals = [];
            snap.forEach(function (snp) {
                _this.mandals.push(snp.val().Name);
            });
            console.log(_this.mandals);
        });
    };
    //Support Functions
    AddMandalsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddMandalsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "bottom"
        });
        toast.present();
    };
    AddMandalsPage.prototype.capsName = function (name) {
        this.name = name.toUpperCase();
    };
    AddMandalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-mandals',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\add-mandals\add-mandals.html"*/'<ion-header>\n\n    <ion-navbar color="primary" >\n\n      <ion-title>Add Mandal</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only (click)="close()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n        <ion-item>\n\n          <ion-label  floating>Mandal Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" (keyup.enter)="checkData()" (ionChange)="capsName(name)" autofocus ></ion-input>\n\n        </ion-item>\n\n        \n\n  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <button ion-button block (click)="checkData()">Add</button>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\add-mandals\add-mandals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddMandalsPage);
    return AddMandalsPage;
}());

//# sourceMappingURL=add-mandals.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Villages_village_details_village_details__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Anms_anm_details_anm_details__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MandalDetailsPage = /** @class */ (function () {
    function MandalDetailsPage(navCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.mandal = this.navParams.get("mandal");
        this.villageRef = this.db.list("SubsIndex/Mandals/" + this.mandal.key + "/Villages");
        this.villages = [];
        this.showVillage = false;
        this.schoolRef = this.db.list("SubsIndex/Mandals/" + this.mandal.key + "/Schools");
        this.schools = [];
        this.showSchool = false;
        this.anmRef = this.db.list("SubsIndex/Mandals/" + this.mandal.key + "/Anms");
        this.anms = [];
        this.showanms = false;
        this.doughnutChartLabels = ['Assigned Schools', 'Unassigned Schools'];
        this.doughnutChartData = [0, 0];
        this.doughnutChartType = 'doughnut';
        this.doughnutLegend = true;
        this.uSchuls = 0;
        this.aSchuls = 0;
        this.getAnms();
        this.getVillages();
        this.getSchools();
        // this.genSchoolChart();
    }
    MandalDetailsPage.prototype.getVillages = function () {
        var _this = this;
        this.villageRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Subs/Villages/" + snp.key).snapshotChanges().subscribe(function (snap) {
                    var temp = snap.payload.val();
                    temp.key = snap.key;
                    _this.villages.push(temp);
                });
            });
        });
    };
    MandalDetailsPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Subs/Schools/" + snp.key).snapshotChanges().subscribe(function (snip) {
                    var tempo = snip.payload.val();
                    tempo.key = snip.key;
                    _this.schools.push(tempo);
                });
            });
        });
    };
    MandalDetailsPage.prototype.getAnms = function () {
        var _this = this;
        this.anmRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                _this.db.object("Anms/" + snp.key).snapshotChanges().subscribe(function (snip) {
                    var tempo = snip.payload.val();
                    tempo.key = snip.key;
                    _this.anms.push(tempo);
                });
            });
        });
    };
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
    MandalDetailsPage.prototype.gtVillageDetails = function (v) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Villages_village_details_village_details__["a" /* VillageDetailsPage */], { village: v });
    };
    MandalDetailsPage.prototype.gtSchoolsDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    MandalDetailsPage.prototype.gtAnmDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__Anms_anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    MandalDetailsPage.prototype.toggleVillages = function () {
        this.showVillage = !this.showVillage;
    };
    MandalDetailsPage.prototype.toggleSchools = function () {
        this.showSchool = !this.showSchool;
    };
    MandalDetailsPage.prototype.toggleAnms = function () {
        this.showanms = !this.showanms;
    };
    MandalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mandal-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\mandal-details\mandal-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>{{mandal.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n\n\n\n\n  <ion-row>\n\n  <ion-col col-6>\n\n  <ion-card>\n\n    <ion-navbar color="primary" (click)="toggleVillages()" class="curs" >\n\n      <ion-title>Villages</ion-title>\n\n      <ion-buttons end>\n\n      <button ion-button large clear>{{mandal.Villages}}</button>\n\n      <button ion-button clear icon-only  *ngIf="!showVillage" (click)="toggleVillages()">\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </button>\n\n      <button ion-button clear icon-only  *ngIf="showVillage" (click)="toggleVillages()">\n\n        <ion-icon name="ios-arrow-up"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-card-content *ngIf="showVillage" >\n\n      <ion-item *ngFor="let v of villages" >\n\n        <button item-start clear ion-button color="dark" large>{{v.Name}}</button>\n\n        <button ion-button item-end clear (click)="gtVillageDetails(v)" >Details</button>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  </ion-col>\n\n  <ion-col col-6>\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-card-title color="primary">Mandal Level Schools Status</ion-card-title>\n\n        <div style="display: block">\n\n          <canvas baseChart\n\n                      [data]="doughnutChartData"\n\n                      [labels]="doughnutChartLabels"\n\n                      [legend]="doughnutLegend"\n\n                      [chartType]="doughnutChartType"\n\n                      (chartHover)="chartHovered($event)"\n\n                      (chartClick)="chartClicked($event)"></canvas>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-row>\n\n<ion-col col-6>\n\n  <ion-card>\n\n    <ion-navbar color="primary" (click)="toggleSchools()" class="curs" >\n\n      <ion-title>Schools</ion-title>\n\n      <ion-buttons end>\n\n      <button ion-button large clear>{{mandal.Schools}}</button>\n\n      <button ion-button clear icon-only  *ngIf="!showSchool" (click)="toggleSchools()">\n\n        <ion-icon name="ios-arrow-down"></ion-icon>\n\n      </button>\n\n      <button ion-button clear icon-only  *ngIf="showSchool" (click)="toggleSchools()">\n\n        <ion-icon name="ios-arrow-up"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-card-content *ngIf="showSchool" >\n\n      <ion-item *ngFor="let s of schools" >\n\n        <button item-start clear ion-button color="dark" large>{{s.Name}}</button>\n\n        <button ion-button item-end clear (click)="gtSchoolsDetails(s)" >Details</button>\n\n      </ion-item>\n\n    </ion-card-content>\n\n\n\n\n\n\n\n  </ion-card>\n\n</ion-col>\n\n</ion-row>\n\n\n\n\n\n<ion-row>\n\n  <ion-col col-6>\n\n    <ion-card>\n\n      <ion-navbar color="primary" (click)="toggleAnms()" class="curs" >\n\n        <ion-title>ANMs</ion-title>\n\n        <ion-buttons end>\n\n        <button ion-button large clear>{{mandal.Anms}}</button>\n\n        <button ion-button clear icon-only  *ngIf="!showanms" (click)="toggleAnms()">\n\n          <ion-icon name="ios-arrow-down"></ion-icon>\n\n        </button>\n\n        <button ion-button clear icon-only  *ngIf="showanms" (click)="toggleAnms()">\n\n          <ion-icon name="ios-arrow-up"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n      </ion-navbar>\n\n  \n\n      <ion-card-content *ngIf="showanms" >\n\n        <ion-item *ngFor="let a of anms" >\n\n          <button item-start clear ion-button color="dark" large>{{a.FirstName}}</button>\n\n          <button ion-button item-end clear (click)="gtAnmDetails(a)" >Details</button>\n\n        </ion-item>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  </ion-col>\n\n  </ion-row>\n\n\n\n\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\mandal-details\mandal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MandalDetailsPage);
    return MandalDetailsPage;
}());

//# sourceMappingURL=mandal-details.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMandalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_mandals_add_mandals__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mandal_details_mandal_details__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewMandalsPage = /** @class */ (function () {
    function ViewMandalsPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.areaRef = this.db.list('Subs/Mandals', function (ref) { return ref.orderByChild("Name"); });
        this.area = [];
        this.areasLoaded = [];
        this.menuCtrl.enable(true);
        this.getAreas();
    }
    ViewMandalsPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(snp.key).child("Schools").once("value", function (schoolsSnap) {
                    temp.Schools = schoolsSnap.numChildren();
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(snp.key).child("Villages").once("value", function (villageSnap) {
                    temp.Villages = villageSnap.numChildren();
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(snp.key).child("Anms").once("value", function (anmSnap) {
                    temp.Anms = anmSnap.numChildren();
                });
                tempArray.push(temp);
            });
            _this.area = tempArray;
            _this.areasLoaded = tempArray;
        });
    };
    ViewMandalsPage.prototype.initializeItems = function () {
        this.area = this.areasLoaded;
    };
    ViewMandalsPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.area = this.area.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewMandalsPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_mandals_add_mandals__["a" /* AddMandalsPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewMandalsPage.prototype.gtMandalDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mandal_details_mandal_details__["a" /* MandalDetailsPage */], { mandal: a });
    };
    ViewMandalsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-mandals',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\view-mandals\view-mandals.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4 >\n\n    <ion-item no-lines class="content">\n\n    <h1 class="title" item-start>Mandals</h1>\n\n    </ion-item>\n\n    </ion-col>\n\n    <ion-col col-6 push-2 >\n\n    <ion-searchbar item-end animated="true" placeholder="Search a Mandal" \n\n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  \n\n    <ion-grid>\n\n      <ion-navbar color="primary">\n\n        <ion-row>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <p class="headBar">Mandal</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <p class="headBar">Villages</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <p class="headBar">Schools</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <p class="headBar">ANMs</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n            <p class="headBar">Students</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-navbar>\n\n    </ion-grid>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-card *ngFor="let a of area;let i = index">\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-1  >\n\n              <p ion-text><strong>{{i+1}}</strong></p>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              {{a.Name}}\n\n            </ion-col>\n\n            <ion-col col-1 text-center >\n\n              <h1 ion-text color="primary">{{a.Villages}}</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-1 text-center >\n\n              <h1 ion-text color="primary">{{a.Schools}}</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-1 text-center >\n\n              <h1 ion-text color="primary">{{a.Anms}}</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-1 text-center >\n\n              <h1 ion-text color="primary">{{a.Students}}0</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <button ion-button clear (click)="gtMandalDetails(a)">Details\n\n                <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-grid>\n\n\n\n\n\n\n\n  \n\n  \n\n  \n\n  \n\n    <ion-fab right bottom>\n\n      <button ion-fab color="danger" (click)="gtAddArea()" >\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Mandals\view-mandals\view-mandals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewMandalsPage);
    return ViewMandalsPage;
}());

//# sourceMappingURL=view-mandals.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSchoolsPage = /** @class */ (function () {
    function AddSchoolsPage(navCtrl, viewCtrl, toastCtrl, db, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.name = "";
        this.str = "";
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals');
        this.villages = [];
        this.schoolRef = this.db.list('Subs/Schools');
        this.schools = [];
        this.getMandals();
        this.getSchools();
    }
    AddSchoolsPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalRef.snapshotChanges().subscribe(function (snap) {
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.mandals.push(temp);
            });
        });
    };
    AddSchoolsPage.prototype.getVillages = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Loading Villages ...'
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value", function (snap) {
            _this.villages = [];
            if (snap.exists()) {
                snap.forEach(function (snp) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(snp.key).once("value", function (vil) {
                        var temp = vil.val();
                        temp.key = vil.key;
                        _this.villages.push(temp);
                        _this.villages.reverse();
                    }).catch(function (er) {
                        console.log(er);
                    }).then(function () {
                        loading.dismiss();
                    });
                });
            }
            else {
                loading.dismiss();
                _this.presentToast("No Villages Found");
            }
        });
    };
    AddSchoolsPage.prototype.getSchools = function () {
        var _this = this;
        this.schoolRef.snapshotChanges().subscribe(function (snap) {
            _this.schools = [];
            snap.forEach(function (snip) {
                var temp = snip.payload.val();
                temp.key = snip.key;
                _this.schools.push(temp.Name);
            });
        });
    };
    AddSchoolsPage.prototype.checkData = function () {
        if (this.name) {
            if (this.str) {
                this.checkDataInDb();
            }
            else {
                this.presentToast("Enter School Strength");
            }
        }
        else {
            this.presentToast("School Name Empty");
        }
    };
    AddSchoolsPage.prototype.checkDataInDb = function () {
        if (this.schools.indexOf(this.name) > -1) {
            this.presentToast("School Already Exists");
        }
        else {
            this.addCat();
        }
    };
    AddSchoolsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddSchoolsPage.prototype.addCat = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Adding Village ...'
        });
        loading.present();
        this.areaRef.push({
            Name: this.name,
            Mandal: this.mandalSel,
            Village: this.villageSel,
            Strength: this.str,
            Management: this.manage,
            TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.mandalSel).child("Schools").child(res.key).set(true).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(_this.villageSel).child("Schools").child(res.key).set(true).then(function () {
                    _this.close();
                    loading.dismiss();
                });
            });
        });
    };
    AddSchoolsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "bottom"
        });
        toast.present();
    };
    AddSchoolsPage.prototype.capsName = function (name) {
        this.name = name.toUpperCase();
    };
    AddSchoolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-schools',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\add-schools\add-schools.html"*/'<ion-header>\n\n    <ion-navbar color="primary" >\n\n      <ion-title>Add School</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only (click)="close()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating>Select Mandal</ion-label>\n\n          <ion-select [(ngModel)]="mandalSel" (ionChange)="getVillages()" >\n\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item *ngIf="villages.length" >\n\n          <ion-label floating>Select Village</ion-label>\n\n          <ion-select [(ngModel)]="villageSel">\n\n            <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label floating>Select Management</ion-label>\n\n          <ion-select [(ngModel)]="manage">\n\n            <ion-option value="MPP_ZPP SCHOOLS">MPP_ZPP SCHOOLS</ion-option>\n\n            <ion-option value="TS TWREI Society Schools">TS TWREI Society Schools</ion-option>\n\n            <ion-option value="KGBVs (SSA)">KGBVs (SSA)</ion-option>\n\n            <ion-option value="Pvt.aided">Pvt.aided</ion-option>\n\n            <ion-option value="State Govt.">State Govt.</ion-option>\n\n            <ion-option value="TS MODEL SCHOOLS">TS MODEL SCHOOLS</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <ion-item *ngIf="villageSel" >\n\n          <ion-label  floating>School Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name"  (ionChange)="capsName(name)" autofocus ></ion-input>\n\n        </ion-item>\n\n        \n\n        <ion-item *ngIf="name.length" >\n\n          <ion-label  floating>School Total Strength</ion-label>\n\n          <ion-input type="number" [(ngModel)]="str" (keyup.enter)="checkData()"  ></ion-input>\n\n        </ion-item>\n\n        \n\n        \n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <button ion-button *ngIf="name" block (click)="checkData()">Add</button>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\add-schools\add-schools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddSchoolsPage);
    return AddSchoolsPage;
}());

//# sourceMappingURL=add-schools.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_schools_add_schools__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_details_school_details__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Anms_anm_details_anm_details__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewSchoolsPage = /** @class */ (function () {
    function ViewSchoolsPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.areaRef = this.db.list('Subs/Schools');
        this.area = [];
        this.areasLoaded = [];
        this.areaFRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools");
        this.menuCtrl.enable(true);
        this.getAreas();
    }
    ViewSchoolsPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                if (temp.ANM) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Anms").child(temp.ANM).once("value", function (iemSnap) {
                        temp.AnmO = iemSnap.val();
                        temp.AnmName = temp.AnmO.FirstName;
                    });
                }
                tempArray.push(temp);
            });
            _this.area = tempArray;
            _this.areasLoaded = tempArray;
        });
    };
    ViewSchoolsPage.prototype.initializeItems = function () {
        this.area = this.areasLoaded;
    };
    ViewSchoolsPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.area = this.area.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewSchoolsPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_schools_add_schools__["a" /* AddSchoolsPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewSchoolsPage.prototype.gtSchoolDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    ViewSchoolsPage.prototype.gtAnmDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__Anms_anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    ViewSchoolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-schools',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\view-schools\view-schools.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4 >\n\n    <ion-item no-lines class="content">\n\n    <h1 class="title" item-start>Schools</h1>\n\n    </ion-item>\n\n    </ion-col>\n\n    <ion-col col-6 push-2 >\n\n    <ion-searchbar item-end animated="true" placeholder="Search a School ..." \n\n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  \n\n      \n\n    <ion-grid>\n\n      <ion-navbar color="primary">\n\n        <ion-row>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <p class="headBar">Schools</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Progress %</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Total Students</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">ANM</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-navbar>\n\n    </ion-grid>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-card *ngFor="let a of area;let i = index">\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-1  >\n\n              <p ion-text><strong>{{i+1}}</strong></p>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              {{a.Name}}\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">0%</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">{{a.Strength}}</h1><br/>\n\n            </ion-col>\n\n\n\n            <ion-col col-2 text-center *ngIf="a.ANM" >\n\n              <button ion-button (click)="gtAnmDetails(a.AnmO)"> {{a.AnmName}} </button>\n\n            </ion-col>\n\n            \n\n            <ion-col col-2 text-center *ngIf="!a.ANM" >\n\n              <h1 ion-text color="primary">No ANM</h1><br/>\n\n            </ion-col>\n\n            \n\n            <ion-col col-2 text-center >\n\n              <button ion-button clear (click)="gtSchoolDetails(a)">Details\n\n                <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-grid>\n\n\n\n\n\n  \n\n  \n\n    <ion-fab right bottom>\n\n      <button ion-fab color="danger" (click)="gtAddArea()" >\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\view-schools\view-schools.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewSchoolsPage);
    return ViewSchoolsPage;
}());

//# sourceMappingURL=view-schools.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewVillagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_villages_add_villages__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__village_details_village_details__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewVillagesPage = /** @class */ (function () {
    function ViewVillagesPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.areaRef = this.db.list('Subs/Villages', function (ref) { return ref.orderByChild("Name"); });
        this.area = [];
        this.areasLoaded = [];
        this.allRef = this.areaRef;
        this.mandals = [];
        this.getMandals();
        this.getAreas();
    }
    ViewVillagesPage.prototype.mandalFilter = function (m) {
        console.log(m);
    };
    ViewVillagesPage.prototype.getAreas = function () {
        var _this = this;
        this.allRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(snp.key).child("Schools").once("value", function (schoolsSnap) {
                    temp.Schools = schoolsSnap.numChildren();
                });
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(snp.key).child("Anms").once("value", function (anmSnap) {
                    temp.Anms = anmSnap.numChildren();
                });
                tempArray.push(temp);
            });
            _this.area = tempArray;
            _this.areasLoaded = tempArray;
        });
    };
    ViewVillagesPage.prototype.initializeItems = function () {
        this.area = this.areasLoaded;
    };
    ViewVillagesPage.prototype.getItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar;
        if (!q) {
            return;
        }
        this.area = this.area.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ViewVillagesPage.prototype.getMandals = function () {
        var _this = this;
        this.db.list("Subs/Mandals", function (ref) { return ref.orderByChild("Name"); }).snapshotChanges().subscribe(function (itemSnap) {
            itemSnap.forEach(function (snap) {
                var temp = snap.payload.val();
                temp.key = snap.key;
                _this.mandals.push(temp);
            });
        });
    };
    ViewVillagesPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_villages_add_villages__["a" /* AddVillagesPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewVillagesPage.prototype.gtVillageDetails = function (v) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__village_details_village_details__["a" /* VillageDetailsPage */], { village: v });
    };
    ViewVillagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-villages',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\view-villages\view-villages.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4 >\n\n    <ion-item no-lines class="content">\n\n    <h1 class="title" item-start>Villages</h1>\n\n    </ion-item>\n\n    </ion-col>\n\n    <ion-col col-6 push-2 >\n\n    <ion-searchbar item-end animated="true" placeholder="Search a Village" \n\n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n    \n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 push-6>\n\n    <ion-item>\n\n      <ion-label>Select Mandal</ion-label>\n\n      <ion-select [(ngModel)]="selMandal">\n\n        <ion-option *ngFor="let m of mandals" (ionChange)="mandalFilter(m)" [value]="m.key" >{{m.Name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n\n\n\n\n    <ion-grid>\n\n      <ion-navbar color="primary">\n\n        <ion-row>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            <p class="headBar">Villages</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Schools</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Anms</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar">Students</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n            <p class="headBar"></p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-navbar>\n\n    </ion-grid>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-card *ngFor="let a of area;let i = index">\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col col-1  >\n\n              <p ion-text><strong>{{i+1}}</strong></p>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n              {{a.Name}}\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">{{a.Schools}}</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">{{a.Anms}}</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <h1 ion-text color="primary">{{a.Students}}0</h1><br/>\n\n            </ion-col>\n\n            <ion-col col-2 text-center >\n\n              <button ion-button clear (click)="gtVillageDetails(a)">Details\n\n                <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-grid>\n\n  \n\n  \n\n  \n\n  \n\n    <ion-fab right bottom>\n\n      <button ion-fab color="danger" (click)="gtAddArea()" >\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-fab>\n\n    </ion-content>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\view-villages\view-villages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ViewVillagesPage);
    return ViewVillagesPage;
}());

//# sourceMappingURL=view-villages.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVillagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVillagesPage = /** @class */ (function () {
    function AddVillagesPage(navCtrl, viewCtrl, toastCtrl, db, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.navParams = navParams;
        this.areaRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals');
        this.villRef = this.db.list('Subs/Villages');
        this.villages = [];
        this.getMandals();
        this.getVillages();
    }
    AddVillagesPage.prototype.getMandals = function () {
        var _this = this;
        this.mandalRef.snapshotChanges().subscribe(function (snap) {
            _this.mandals = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.mandals.push(temp);
            });
        });
    };
    AddVillagesPage.prototype.getVillages = function () {
        var _this = this;
        this.villRef.snapshotChanges().subscribe(function (snap) {
            _this.villages = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                _this.villages.push(temp.Name);
            });
        });
    };
    AddVillagesPage.prototype.checkData = function () {
        if (this.name) {
            if (this.mandalSel) {
                this.checkDataInDb();
            }
            else {
                this.presentToast("Mandal not Selected");
            }
        }
        else {
            this.presentToast("Mandal Name Empty");
        }
    };
    AddVillagesPage.prototype.checkDataInDb = function () {
        if (this.villages.indexOf(this.name) > -1) {
            this.presentToast("Village Already Exists");
        }
        else {
            this.addCat();
        }
    };
    AddVillagesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddVillagesPage.prototype.addCat = function () {
        var _this = this;
        this.areaRef.push({
            Name: this.name,
            Mandal: this.mandalSel,
            TimeStamp: __WEBPACK_IMPORTED_MODULE_3_moment___default()().format()
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(_this.mandalSel).child("Villages").child(res.key).set(true).then(function () {
                _this.close();
            });
        });
    };
    AddVillagesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "bottom"
        });
        toast.present();
    };
    AddVillagesPage.prototype.capsName = function (name) {
        this.name = name.toUpperCase();
    };
    AddVillagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-villages',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\add-villages\add-villages.html"*/'<ion-header>\n\n    <ion-navbar color="primary" >\n\n      <ion-title>Add Village</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button clear icon-only (click)="close()">\n\n          <ion-icon name="md-close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-card>\n\n      <ion-card-content>\n\n\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating>Select Mandal</ion-label>\n\n          <ion-select [(ngModel)]="mandalSel">\n\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item *ngIf="mandalSel">\n\n          <ion-label  floating>Village Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="name" (keyup.enter)="checkData()" (ionChange)="capsName(name)" autofocus ></ion-input>\n\n        </ion-item>\n\n        \n\n  \n\n      </ion-card-content>\n\n    </ion-card>\n\n  \n\n    <button ion-button *ngIf="name" block (click)="checkData()">Add</button>\n\n  \n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Villages\add-villages\add-villages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AddVillagesPage);
    return AddVillagesPage;
}());

//# sourceMappingURL=add-villages.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Extra/dashboard/dashboard.module": [
		694,
		18
	],
	"../pages/Extra/login/login.module": [
		695,
		17
	],
	"../pages/Students/student-details/student-details.module": [
		696,
		16
	],
	"../pages/Students/students/students.module": [
		697,
		15
	],
	"../pages/Subs/Anms/add-amns/add-amns.module": [
		698,
		14
	],
	"../pages/Subs/Anms/anm-details/anm-details.module": [
		699,
		13
	],
	"../pages/Subs/Anms/assign-school/assign-school.module": [
		700,
		12
	],
	"../pages/Subs/Anms/del-anm/del-anm.module": [
		701,
		11
	],
	"../pages/Subs/Anms/edit-anm/edit-anm.module": [
		702,
		10
	],
	"../pages/Subs/Anms/view-amns/view-amns.module": [
		703,
		9
	],
	"../pages/Subs/Mandals/add-mandals/add-mandals.module": [
		704,
		8
	],
	"../pages/Subs/Mandals/mandal-details/mandal-details.module": [
		705,
		7
	],
	"../pages/Subs/Mandals/view-mandals/view-mandals.module": [
		706,
		6
	],
	"../pages/Subs/Schools/add-schools/add-schools.module": [
		707,
		5
	],
	"../pages/Subs/Schools/school-details/school-details.module": [
		708,
		4
	],
	"../pages/Subs/Schools/view-schools/view-schools.module": [
		709,
		3
	],
	"../pages/Subs/Villages/add-villages/add-villages.module": [
		712,
		2
	],
	"../pages/Subs/Villages/view-villages/view-villages.module": [
		710,
		1
	],
	"../pages/Subs/Villages/village-details/village-details.module": [
		711,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 262;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StudentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentDetailsPage = /** @class */ (function () {
    function StudentDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StudentDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudentDetailsPage');
    };
    StudentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-student-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\student-details\student-details.html"*/'<!--\n\n  Generated template for the StudentDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>studentDetails</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Students\student-details\student-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StudentDetailsPage);
    return StudentDetailsPage;
}());

//# sourceMappingURL=student-details.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(580);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseCred */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_Subs_Anms_edit_anm_edit_anm__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var firebaseCred = {
    apiKey: "AIzaSyBBngtTf37X5L59EnuqNnWlGFRqhgwmWQU",
    authDomain: "samatha-8edcd.firebaseapp.com",
    databaseURL: "https://samatha-8edcd.firebaseio.com",
    projectId: "samatha-8edcd",
    storageBucket: "samatha-8edcd.appspot.com",
    messagingSenderId: "659890863002"
};
__WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](firebaseCred);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__["a" /* AddMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__["a" /* AddVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__["a" /* ViewSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__["a" /* AddSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__["a" /* AddAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__["a" /* AnmDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__["a" /* MandalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__["a" /* VillageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__["a" /* StudentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__["a" /* StudentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__["a" /* AssignSchoolPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__["a" /* DelAnmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_Subs_Anms_edit_anm_edit_anm__["a" /* EditAnmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/Extra/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Extra/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Students/student-details/student-details.module#StudentDetailsPageModule', name: 'StudentDetailsPage', segment: 'student-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Students/students/students.module#StudentsPageModule', name: 'StudentsPage', segment: 'students', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/add-amns/add-amns.module#AddAmnsPageModule', name: 'AddAmnsPage', segment: 'add-amns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/anm-details/anm-details.module#AnmDetailsPageModule', name: 'AnmDetailsPage', segment: 'anm-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/assign-school/assign-school.module#AssignSchoolPageModule', name: 'AssignSchoolPage', segment: 'assign-school', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/del-anm/del-anm.module#DelAnmPageModule', name: 'DelAnmPage', segment: 'del-anm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/edit-anm/edit-anm.module#EditAnmPageModule', name: 'EditAnmPage', segment: 'edit-anm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Anms/view-amns/view-amns.module#ViewAmnsPageModule', name: 'ViewAmnsPage', segment: 'view-amns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/add-mandals/add-mandals.module#AddMandalsPageModule', name: 'AddMandalsPage', segment: 'add-mandals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/mandal-details/mandal-details.module#MandalDetailsPageModule', name: 'MandalDetailsPage', segment: 'mandal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/view-mandals/view-mandals.module#ViewMandalsPageModule', name: 'ViewMandalsPage', segment: 'view-mandals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/add-schools/add-schools.module#AddSchoolsPageModule', name: 'AddSchoolsPage', segment: 'add-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/school-details/school-details.module#SchoolDetailsPageModule', name: 'SchoolDetailsPage', segment: 'school-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/view-schools/view-schools.module#ViewSchoolsPageModule', name: 'ViewSchoolsPage', segment: 'view-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/view-villages/view-villages.module#ViewVillagesPageModule', name: 'ViewVillagesPage', segment: 'view-villages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/village-details/village-details.module#VillageDetailsPageModule', name: 'VillageDetailsPage', segment: 'village-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/add-villages/add-villages.module#AddVillagesPageModule', name: 'AddVillagesPage', segment: 'add-villages', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(firebaseCred),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_25_ng2_charts__["ChartsModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__["a" /* AddMandalsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__["a" /* AddVillagesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__["a" /* ViewSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__["a" /* AddSchoolsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__["a" /* AddAmnsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__["a" /* AnmDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__["a" /* MandalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__["a" /* SchoolDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__["a" /* VillageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__["a" /* StudentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__["a" /* StudentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__["a" /* AssignSchoolPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__["a" /* DelAnmPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_Subs_Anms_edit_anm_edit_anm__["a" /* EditAnmPage */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnmDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assign_school_assign_school__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_anm_edit_anm__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnmDetailsPage = /** @class */ (function () {
    function AnmDetailsPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.anmP = this.navParams.get("anm");
    }
    AnmDetailsPage.prototype.editAnmDetails = function () {
        var editAnm = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__edit_anm_edit_anm__["a" /* EditAnmPage */], { anm: this.anmP }, { enableBackdropDismiss: false });
        editAnm.present();
    };
    AnmDetailsPage.prototype.assignSchools = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assign_school_assign_school__["a" /* AssignSchoolPage */], { anm: this.anmP });
    };
    AnmDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-anm-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\anm-details\anm-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>{{anmP.FirstName}}&nbsp;{{anmP.LastName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button float-right (click)="assignSchools()">Assign School</button>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <button ion-button float-right clear icon-only (click)="editAnmDetails()">\n\n              <ion-icon name="md-create"></ion-icon>\n\n            </button>\n\n            <ion-card-title>{{anmP.FirstName}}&nbsp;{{anmP.LastName}}</ion-card-title>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Phone Number</p>\n\n              <p item-end>{{anmP.Phone}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Gender</p>\n\n              <p item-end>{{anmP.Gender}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Email</p>\n\n              <p item-end>{{anmP.Email}}</p>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n      <ion-col col-6>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>Status</ion-card-title>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Progress</p>\n\n              <p  item-end >20%</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Schools</p>\n\n              <p  item-end >5</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text item-start color="primary">Students</p>\n\n              <p  item-end >20</p>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Anms\anm-details\anm-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AnmDetailsPage);
    return AnmDetailsPage;
}());

//# sourceMappingURL=anm-details.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchoolDetailsPage = /** @class */ (function () {
    function SchoolDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.school = this.navParams.get("school");
        this.getMandal();
        this.getVillage();
    }
    SchoolDetailsPage.prototype.getMandal = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Mandals").child(this.school.Mandal).once("value", function (itemSnap) {
            _this.mandalName = itemSnap.val().Name;
        });
    };
    SchoolDetailsPage.prototype.getVillage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(this.school.Village).once("value", function (itemSnap) {
            _this.vName = itemSnap.val().Name;
        });
    };
    SchoolDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-details',template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\school-details\school-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>{{school.Name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n    <ion-col col-6>\n\n      <ion-row>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h2 ion-text color="primary" item-start>Mandal</h2>\n\n              <h2 item-end>{{mandalName}}</h2>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-item>\n\n              <h2 ion-text color="primary" item-start>Village</h2>\n\n              <h2 item-end>{{vName}}</h2>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n    \n\n      </ion-row>\n\n\n\n\n\n\n\n\n\n    </ion-col>\n\n      \n\n\n\n\n\n    <ion-col col-6>\n\n\n\n      <ion-row >\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <ion-card-title>{{school.Name}}</ion-card-title>\n\n\n\n            <ion-item>\n\n              <p ion-text color="primary" item-start >Management</p>\n\n              <p item-end>{{school.Management}}</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <p ion-text color="primary" item-start >Progress</p>\n\n              <p item-end>20%</p>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <p ion-text color="primary" item-start >ANM</p>\n\n              <p item-end *ngIf="!school.ANM">Unassigned</p>\n\n              <p item-end *ngIf="school.ANM">{{school.ANM}}</p>\n\n            </ion-item>\n\n            <ion-item>\n\n              <p ion-text color="primary" item-start >Total Strength</p>\n\n              <p item-end>{{school.Strength}}</p>\n\n            </ion-item>\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-row>\n\n\n\n\n\n    </ion-col>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n      \n\n    </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n    </ion-col>\n\n    </ion-row>\n\n  </ion-grid>  \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\pages\Subs\Schools\school-details\school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SchoolDetailsPage);
    return SchoolDetailsPage;
}());

//# sourceMappingURL=school-details.js.map

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 273,
	"./af.js": 273,
	"./ar": 274,
	"./ar-dz": 275,
	"./ar-dz.js": 275,
	"./ar-kw": 276,
	"./ar-kw.js": 276,
	"./ar-ly": 277,
	"./ar-ly.js": 277,
	"./ar-ma": 278,
	"./ar-ma.js": 278,
	"./ar-sa": 279,
	"./ar-sa.js": 279,
	"./ar-tn": 280,
	"./ar-tn.js": 280,
	"./ar.js": 274,
	"./az": 281,
	"./az.js": 281,
	"./be": 282,
	"./be.js": 282,
	"./bg": 283,
	"./bg.js": 283,
	"./bm": 284,
	"./bm.js": 284,
	"./bn": 285,
	"./bn.js": 285,
	"./bo": 286,
	"./bo.js": 286,
	"./br": 287,
	"./br.js": 287,
	"./bs": 288,
	"./bs.js": 288,
	"./ca": 289,
	"./ca.js": 289,
	"./cs": 290,
	"./cs.js": 290,
	"./cv": 291,
	"./cv.js": 291,
	"./cy": 292,
	"./cy.js": 292,
	"./da": 293,
	"./da.js": 293,
	"./de": 294,
	"./de-at": 295,
	"./de-at.js": 295,
	"./de-ch": 296,
	"./de-ch.js": 296,
	"./de.js": 294,
	"./dv": 297,
	"./dv.js": 297,
	"./el": 298,
	"./el.js": 298,
	"./en-au": 299,
	"./en-au.js": 299,
	"./en-ca": 300,
	"./en-ca.js": 300,
	"./en-gb": 301,
	"./en-gb.js": 301,
	"./en-ie": 302,
	"./en-ie.js": 302,
	"./en-il": 303,
	"./en-il.js": 303,
	"./en-nz": 304,
	"./en-nz.js": 304,
	"./eo": 305,
	"./eo.js": 305,
	"./es": 306,
	"./es-do": 307,
	"./es-do.js": 307,
	"./es-us": 308,
	"./es-us.js": 308,
	"./es.js": 306,
	"./et": 309,
	"./et.js": 309,
	"./eu": 310,
	"./eu.js": 310,
	"./fa": 311,
	"./fa.js": 311,
	"./fi": 312,
	"./fi.js": 312,
	"./fo": 313,
	"./fo.js": 313,
	"./fr": 314,
	"./fr-ca": 315,
	"./fr-ca.js": 315,
	"./fr-ch": 316,
	"./fr-ch.js": 316,
	"./fr.js": 314,
	"./fy": 317,
	"./fy.js": 317,
	"./gd": 318,
	"./gd.js": 318,
	"./gl": 319,
	"./gl.js": 319,
	"./gom-latn": 320,
	"./gom-latn.js": 320,
	"./gu": 321,
	"./gu.js": 321,
	"./he": 322,
	"./he.js": 322,
	"./hi": 323,
	"./hi.js": 323,
	"./hr": 324,
	"./hr.js": 324,
	"./hu": 325,
	"./hu.js": 325,
	"./hy-am": 326,
	"./hy-am.js": 326,
	"./id": 327,
	"./id.js": 327,
	"./is": 328,
	"./is.js": 328,
	"./it": 329,
	"./it.js": 329,
	"./ja": 330,
	"./ja.js": 330,
	"./jv": 331,
	"./jv.js": 331,
	"./ka": 332,
	"./ka.js": 332,
	"./kk": 333,
	"./kk.js": 333,
	"./km": 334,
	"./km.js": 334,
	"./kn": 335,
	"./kn.js": 335,
	"./ko": 336,
	"./ko.js": 336,
	"./ky": 337,
	"./ky.js": 337,
	"./lb": 338,
	"./lb.js": 338,
	"./lo": 339,
	"./lo.js": 339,
	"./lt": 340,
	"./lt.js": 340,
	"./lv": 341,
	"./lv.js": 341,
	"./me": 342,
	"./me.js": 342,
	"./mi": 343,
	"./mi.js": 343,
	"./mk": 344,
	"./mk.js": 344,
	"./ml": 345,
	"./ml.js": 345,
	"./mn": 346,
	"./mn.js": 346,
	"./mr": 347,
	"./mr.js": 347,
	"./ms": 348,
	"./ms-my": 349,
	"./ms-my.js": 349,
	"./ms.js": 348,
	"./mt": 350,
	"./mt.js": 350,
	"./my": 351,
	"./my.js": 351,
	"./nb": 352,
	"./nb.js": 352,
	"./ne": 353,
	"./ne.js": 353,
	"./nl": 354,
	"./nl-be": 355,
	"./nl-be.js": 355,
	"./nl.js": 354,
	"./nn": 356,
	"./nn.js": 356,
	"./pa-in": 357,
	"./pa-in.js": 357,
	"./pl": 358,
	"./pl.js": 358,
	"./pt": 359,
	"./pt-br": 360,
	"./pt-br.js": 360,
	"./pt.js": 359,
	"./ro": 361,
	"./ro.js": 361,
	"./ru": 362,
	"./ru.js": 362,
	"./sd": 363,
	"./sd.js": 363,
	"./se": 364,
	"./se.js": 364,
	"./si": 365,
	"./si.js": 365,
	"./sk": 366,
	"./sk.js": 366,
	"./sl": 367,
	"./sl.js": 367,
	"./sq": 368,
	"./sq.js": 368,
	"./sr": 369,
	"./sr-cyrl": 370,
	"./sr-cyrl.js": 370,
	"./sr.js": 369,
	"./ss": 371,
	"./ss.js": 371,
	"./sv": 372,
	"./sv.js": 372,
	"./sw": 373,
	"./sw.js": 373,
	"./ta": 374,
	"./ta.js": 374,
	"./te": 375,
	"./te.js": 375,
	"./tet": 376,
	"./tet.js": 376,
	"./tg": 377,
	"./tg.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 383,
	"./tzm-latn": 384,
	"./tzm-latn.js": 384,
	"./tzm.js": 383,
	"./ug-cn": 385,
	"./ug-cn.js": 385,
	"./uk": 386,
	"./uk.js": 386,
	"./ur": 387,
	"./ur.js": 387,
	"./uz": 388,
	"./uz-latn": 389,
	"./uz-latn.js": 389,
	"./uz.js": 388,
	"./vi": 390,
	"./vi.js": 390,
	"./x-pseudo": 391,
	"./x-pseudo.js": 391,
	"./yo": 392,
	"./yo.js": 392,
	"./zh-cn": 393,
	"./zh-cn.js": 393,
	"./zh-hk": 394,
	"./zh-hk.js": 394,
	"./zh-tw": 395,
	"./zh-tw.js": 395
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 626;

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Subs_Villages_view_villages_view_villages__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Subs_Schools_view_schools_view_schools__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Students_students_students__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Subs_Anms_view_amns_view_amns__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, toastCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */];
        this.full = true;
        this.initializeApp();
        this.pages = [
            { title: 'DashBoard', component: __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__["a" /* DashboardPage */], icon: "flash", color: "yellowi" },
            { title: "Mandals", component: __WEBPACK_IMPORTED_MODULE_5__pages_Subs_Mandals_view_mandals_view_mandals__["a" /* ViewMandalsPage */], icon: "md-pin", color: "whiter" },
            { title: "Villages", component: __WEBPACK_IMPORTED_MODULE_6__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */], icon: "md-pin", color: "whiter" },
            { title: "Schools", component: __WEBPACK_IMPORTED_MODULE_7__pages_Subs_Schools_view_schools_view_schools__["a" /* ViewSchoolsPage */], icon: "md-pin", color: "whiter" },
            { title: "ANM's", component: __WEBPACK_IMPORTED_MODULE_9__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */], icon: "ios-people", color: "whiter" },
            { title: "Students", component: __WEBPACK_IMPORTED_MODULE_8__pages_Students_students_students__["a" /* StudentsPage */], icon: "ios-person", color: "whiter" },
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Admin Data").child("Admins").child(user.uid).once('value', function (itemSnap) {
                        if (itemSnap.exists()) {
                            var welMsg = "Welcome" + " " + itemSnap.val().Name;
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_Subs_Villages_view_villages_view_villages__["a" /* ViewVillagesPage */];
                            _this.presentToast(welMsg);
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */];
                                _this.presentToast("You are not registered a Admin");
                            });
                        }
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__["a" /* LoginPage */]);
            _this.presentToast("Signed Out");
        }).catch(function (error) {
            console.log(error.message);
        });
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: "top",
            showCloseButton: false,
        });
        toast.present();
    };
    MyApp.prototype.collapse = function () {
        this.full = false;
    };
    MyApp.prototype.expand = function () {
        this.full = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Visualizer\Desktop\sa\src\app\app.html"*/'<ion-split-pane  >\n\n  <ion-menu [content]="content" [class.fullPain]="!full" [class.halfPain]="full" >\n\n    <ion-header>\n\n      <ion-toolbar color="dark">\n\n        <h1 *ngIf="full" class="t">Samatha Admin</h1>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="no-scroll bg-semidark">\n\n\n\n      <ion-list no-lines *ngIf="full" >\n\n        <button menuClose color="dark" [class.activeHighlight]="checkActive(p)" \n\n        ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon class="menu-icon" item-left [name]="p.icon" [color]="p.color" ></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list no-lines *ngIf="!full" >\n\n        <button menuClose color="dark" [class.activeHighlight]="checkActive(p)" \n\n        ion-item *ngFor="let p of pages" (click)="openPage(p)" icon-only >\n\n          <ion-icon class="menu-icon" item-left [name]="p.icon" [color]="p.color" ></ion-icon>\n\n        </button>\n\n      </ion-list>\n\n\n\n    </ion-content>\n\n    <ion-footer class="menu-footer">\n\n      <ion-list no-lines>\n\n      <button ion-button block *ngIf="full"  (click)="signOut()" color="danger">\n\n        Sign Out\n\n      </button>\n\n      <button ion-item block icon-only *ngIf="!full" (click)="signOut()" color="danger">\n\n        <ion-icon name="md-power" item-left ></ion-icon>\n\n      </button>\n\n\n\n\n\n      <button menuClose color="dark" *ngIf="full" ion-item (click)="collapse()">\n\n        <ion-icon class="menu-icon" item-end name="md-arrow-dropleft" color="whiter" ></ion-icon>\n\n      </button>\n\n\n\n      <button menuClose color="dark" *ngIf="!full" ion-item (click)="expand()">\n\n        <ion-icon class="menu-icon" item-end name="md-arrow-dropright" color="whiter" ></ion-icon>\n\n      </button>\n\n      </ion-list>\n\n    </ion-footer>\n\n  </ion-menu>\n\n\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Visualizer\Desktop\sa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[446]);
//# sourceMappingURL=main.js.map