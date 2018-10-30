webpackJsonp([18],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewAmnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_amns_add_amns__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__anm_details_anm_details__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__del_anm_del_anm__ = __webpack_require__(175);
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
    ViewAmnsPage.prototype.clearSel = function () {
        this.selArray = [];
    };
    ViewAmnsPage.prototype.gtAnmDetails = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__anm_details_anm_details__["a" /* AnmDetailsPage */], { anm: a });
    };
    ViewAmnsPage.prototype.gtAddANM = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_amns_add_amns__["a" /* AddAmnsPage */]);
    };
    ViewAmnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-amns',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\view-amns\view-amns.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n    <ion-item no-lines class="content">\n    <h1 class="title" item-start>ANM</h1>\n    </ion-item>\n    </ion-col>\n    <ion-col col-6 push-2 >\n    <ion-searchbar item-end animated="true" placeholder="Search an ANM.." \n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-navbar color="primary">\n        <ion-row>\n          <ion-col col-1>\n            <ion-checkbox ></ion-checkbox>\n          </ion-col>\n          <ion-col col-1>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Name</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Progress </p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Phone No.</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Schools</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar"></p>\n          </ion-col>\n        </ion-row>\n      </ion-navbar>\n    </ion-grid>\n\n    <button ion-button float-right color="light" *ngIf="selArray.length" (click)="clearSel()">Clear Selection</button>\n\n    <ion-grid>\n        <ion-card *ngFor="let a of anms;let i = index">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-1  >\n              <ion-checkbox [(ngModel)]="a.Checked" (ionChange)="addToArr(a)" ></ion-checkbox>  \n            </ion-col>\n            <ion-col col-1  >\n              <p ion-text><strong>{{i+1}}</strong></p>\n            </ion-col>\n            <ion-col col-2>\n              {{a.FirstName}}&nbsp;{{a.LastName}}\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">null </h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Phone}} </h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Schools}}</h1>\n              <button ion-button  clear>View</button>\n            </ion-col>\n            <ion-col col-2>\n            <button ion-button clear (click)="gtAnmDetails(a)">Details\n              <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n            </button>\n            </ion-col>\n\n\n\n          </ion-row>\n        </ion-card-content>\n        </ion-card>\n    </ion-grid>    \n\n\n    <ion-fab right bottom *ngIf="!selArray.length">\n      <button ion-fab color="primary" (click)="gtAddANM()" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-fab right bottom *ngIf="selArray.length">\n      <button ion-fab color="danger" (click)="delMulC()" >\n        <ion-icon name="md-trash"></ion-icon>\n      </button>\n    </ion-fab>\n    </ion-content>'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\view-amns\view-amns.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _f || Object])
    ], ViewAmnsPage);
    return ViewAmnsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=view-amns.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VillageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Schools_school_details_school_details__ = __webpack_require__(82);
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
        this.getSchools();
    }
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
    VillageDetailsPage.prototype.toggleSchools = function () {
        this.showSchool = !this.showSchool;
    };
    VillageDetailsPage.prototype.gtSchoolsDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    VillageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-village-details',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Villages\village-details\village-details.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>{{village.Name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n<ion-col col-6>\n  <ion-card>\n    <ion-navbar color="primary" (click)="toggleSchools()" class="curs" >\n      <ion-title>Schools</ion-title>\n      <ion-buttons end>\n      <button ion-button large clear>{{village.Schools}}</button>\n      <button ion-button clear icon-only  *ngIf="!showSchool" (click)="toggleSchools()">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n      <button ion-button clear icon-only  *ngIf="showSchool" (click)="toggleSchools()">\n        <ion-icon name="ios-arrow-up"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-navbar>\n\n    <ion-card-content *ngIf="showSchool" >\n      <ion-item *ngFor="let s of schools" >\n        <button item-start clear ion-button color="dark" large>{{s.Name}}</button>\n        <button ion-button item-end clear (click)="gtSchoolsDetails(s)" >Details</button>\n      </ion-item>\n    </ion-card-content>\n\n\n  </ion-card>\n</ion-col>\n</ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Villages\village-details\village-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], VillageDetailsPage);
    return VillageDetailsPage;
}());

//# sourceMappingURL=village-details.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(76);
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
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Extra\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar color="primary">\n  <ion-buttons end>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <p ion-text color="whiter">{{adminName}} </p>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item no-lines class="content">\n<h1 class="title">DASHBOARD</h1>\n</ion-item>\n\n<ion-grid>\n<ion-row>\n\n<ion-col col-2>\n  <ion-card>\n    <ion-card-content>\n      <p class="mNum">{{mandals}}</p>\n      <p  class="mText">Mandals</p>\n    </ion-card-content>\n  </ion-card>\n</ion-col>\n\n<ion-col col-2>\n  <ion-card>\n    <ion-card-content>\n      <p class="mNum">{{villages}}</p>\n      <p  class="mText">Villages</p>\n    </ion-card-content>\n  </ion-card>\n</ion-col>\n\n<ion-col col-2>\n  <ion-card>\n    <ion-card-content>\n      <p class="mNum">{{schools}}</p>\n      <p  class="mText">Schools</p>\n    </ion-card-content>\n  </ion-card>\n</ion-col>\n\n<ion-col col-2>\n  <ion-card>\n    <ion-card-content>\n      <p class="mNum">{{anms}}</p>\n      <p  class="mText">ANMs</p>\n    </ion-card-content>\n  </ion-card>\n</ion-col>\n\n<ion-col col-2>\n  <ion-card>\n    <ion-card-content>\n      <p class="mNum">{{students}}</p>\n      <p  class="mText">Students</p>\n    </ion-card-content>\n  </ion-card>\n</ion-col>\n\n\n</ion-row>\n<ion-row>\n  <ion-col col-6>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title color="primary">Schools Status</ion-card-title>\n        <div style="display: block">\n          <canvas baseChart\n                      [data]="doughnutChartData"\n                      [labels]="doughnutChartLabels"\n                      [legend]="doughnutLegend"\n                      [chartType]="doughnutChartType"\n                      (chartHover)="chartHovered($event)"\n                      (chartClick)="chartClicked($event)"></canvas>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Extra\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Extra\login\login.html"*/'<ion-content padding>\n  <div class="bg-main">\n  </div>\n\n  <ion-slides>\n    <ion-slide>\n      <ion-card>\n        <ion-card-content>\n          <h1 class="signinTitle">Sign In to Samatha Admin</h1>\n\n          <ion-item>\n            <ion-label color="whiter" fixed>Email</ion-label>\n            <ion-input type="email" (keyup.enter)="checkData()"  [(ngModel)]="email" autofocus ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label color="whiter" fixed>Password</ion-label>\n            <ion-input type="password" (keyup.enter)="checkData()"  [(ngModel)]="pass"></ion-input>\n          </ion-item>\n\n          <button ion-button color="primary"  (click)="checkData()">Login</button>\n        </ion-card-content>\n\n\n</ion-card>\n  </ion-slide>\n</ion-slides>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Extra\login\login.html"*/,
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

/***/ 171:
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
            selector: 'page-students',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Students\students\students.html"*/'<!--\n  Generated template for the StudentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>students</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Students\students\students.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StudentsPage);
    return StudentsPage;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAmnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_amns_view_amns__ = __webpack_require__(102);
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
            selector: 'page-add-amns',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\add-amns\add-amns.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Add Amns</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  {{samePasses}}\n  <ion-card class="mainCard" >\n  <ion-card-content>\n\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input type="text" autofocus [(ngModel)]="fName" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input type="text" [(ngModel)]="lName" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n  <ion-label floating>Gender</ion-label>\n  <ion-select [(ngModel)]="gender">\n    <ion-option value="Male">Male</ion-option>\n    <ion-option value="Female">Female</ion-option>\n    <ion-option value="Other">Other</ion-option>\n  </ion-select>\n</ion-item>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Phone Number</ion-label>\n    <ion-input type="number" [(ngModel)]="phone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="text" (ionChange)="checkPasses()" [(ngModel)]="pass"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Confirm Password</ion-label>\n    <ion-input type="text" (ionChange)="checkPasses()" [(ngModel)]="cPass"></ion-input>\n  </ion-item>\n\n\n  <button ion-button round (click)="addAnm()">Add Anm</button>\n\n  \n  </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\add-amns\add-amns.html"*/,
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnmDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assign_school_assign_school__ = __webpack_require__(174);
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
    function AnmDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.anmP = this.navParams.get("anm");
        console.log(this.anmP);
    }
    AnmDetailsPage.prototype.assignSchools = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__assign_school_assign_school__["a" /* AssignSchoolPage */], { anm: this.anmP });
    };
    AnmDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-anm-details',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\anm-details\anm-details.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>{{anmP.FirstName}}&nbsp;{{anmP.LastName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button float-right (click)="assignSchools()">Assign School</button>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title>{{anmP.FirstName}}&nbsp;{{anmP.LastName}}</ion-card-title>\n            <ion-item>\n              <p ion-text item-start color="primary">Phone Number</p>\n              <p item-end>{{anmP.Phone}}</p>\n            </ion-item>\n            <ion-item>\n              <p ion-text item-start color="primary">Gender</p>\n              <p item-end>{{anmP.Gender}}</p>\n            </ion-item>\n            <ion-item>\n              <p ion-text item-start color="primary">Email</p>\n              <p item-end>{{anmP.Email}}</p>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-card>\n          <ion-card-content>\n            <ion-card-title>Status</ion-card-title>\n            <ion-item>\n              <p ion-text item-start color="primary">Progress</p>\n              <p  item-end >20%</p>\n            </ion-item>\n            <ion-item>\n              <p ion-text item-start color="primary">Schools</p>\n              <p  item-end >5</p>\n            </ion-item>\n            <ion-item>\n              <p ion-text item-start color="primary">Students</p>\n              <p  item-end >20</p>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\anm-details\anm-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AnmDetailsPage);
    return AnmDetailsPage;
}());

//# sourceMappingURL=anm-details.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignSchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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
    function AssignSchoolPage(navCtrl, toastCtrl, db, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.anmJ = this.navParams.get("anm");
        this.mandals = [];
        this.mandalRef = this.db.list('Subs/Mandals');
        this.villages = [];
        this.schools = [];
        this.anmJobRef = this.db.list("Anm Assigns/" + this.anmJ.key);
        this.assignedJobs = [];
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
            _this.presentToast(_this.schoolSel.Name + "is assigned to " + _this.anmJ.FirstName + " " + _this.anmJ.LastName);
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
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Mandals").child(this.mandalSel).child("Villages").once("value", function (snap) {
            _this.villages = [];
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    _this.villages.push(temp);
                }).then(function () {
                    loading.dismiss();
                });
            });
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
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Schools").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    if (!temp.ANM) {
                        _this.schools.push(temp);
                    }
                }).then(function () {
                    loading.dismiss();
                });
            });
        });
    };
    AssignSchoolPage.prototype.clear = function () {
        this.mandalSel = null;
        this.villageSel = null;
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
            selector: 'page-assign-school',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\assign-school\assign-school.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Schools Assignments</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n      <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n    <ion-item no-lines class="content">\n    <h1 class="title" item-start>{{anmJ.FirstName}}&nbsp;{{anmJ.LastName}}</h1>\n    </ion-item>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-card>\n              <ion-card-content>\n                <ion-card-title>Current Schools</ion-card-title>\n                <p *ngFor="let j of assignedJobs" >{{j.SchoolName}}</p>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-6>\n      <ion-card>\n      <ion-card-content>\n\n        <ion-card-title>Assign School</ion-card-title>\n\n\n        <ion-item>\n          <ion-label floating>Select Mandal</ion-label>\n          <ion-select [(ngModel)]="mandalSel" (ionChange)="getVillages()" >\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf="villages.length" >\n          <ion-label floating>Select Village</ion-label>\n          <ion-select [(ngModel)]="villageSel" (ionChange)="getSchools()" >\n            <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}} </ion-option>\n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item *ngIf="schools.length" >\n          <ion-label  floating>Select School</ion-label>\n          <ion-select [(ngModel)]="schoolSel">\n              <ion-option *ngFor="let s of schools" [value]="s">{{s.Name}} </ion-option>\n          </ion-select>\n        </ion-item>\n        \n        <button ion-button float-right (click)="assignSchool()">Assign</button>\n  \n      </ion-card-content>\n    </ion-card>\n  \n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\assign-school\assign-school.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelAnmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
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
            selector: 'page-del-anm',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\del-anm\del-anm.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Delete ANMs</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="close()">Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides>\n    <ion-slide>\n\n\n  <ion-card >\n    <ion-card-content>\n\n      <ion-item *ngFor="let a of anms">\n          {{a.FirstName}}&nbsp;{{a.LastName}}\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n  <button ion-button color="danger"  (click)="deleteAnms()">Delete</button>\n\n</ion-slide>\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Anms\del-anm\del-anm.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _e || Object])
    ], DelAnmPage);
    return DelAnmPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=del-anm.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMandalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
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
            selector: 'page-add-mandals',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Mandals\add-mandals\add-mandals.html"*/'<ion-header>\n    <ion-navbar color="primary" >\n      <ion-title>Add Mandal</ion-title>\n      <ion-buttons end>\n        <button ion-button clear icon-only (click)="close()">\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card>\n      <ion-card-content>\n\n        <ion-item>\n          <ion-label  floating>Mandal Name</ion-label>\n          <ion-input type="text" [(ngModel)]="name" (keyup.enter)="checkData()" (ionChange)="capsName(name)" autofocus ></ion-input>\n        </ion-item>\n        \n  \n      </ion-card-content>\n    </ion-card>\n  \n    <button ion-button block (click)="checkData()">Add</button>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Mandals\add-mandals\add-mandals.html"*/,
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

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MandalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Villages_village_details_village_details__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__ = __webpack_require__(82);
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
        console.log(this.mandal);
        this.getVillages();
        this.getSchools();
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
    MandalDetailsPage.prototype.gtVillageDetails = function (v) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Villages_village_details_village_details__["a" /* VillageDetailsPage */], { village: v });
    };
    MandalDetailsPage.prototype.gtSchoolsDetails = function (s) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Schools_school_details_school_details__["a" /* SchoolDetailsPage */], { school: s });
    };
    MandalDetailsPage.prototype.toggleVillages = function () {
        this.showVillage = !this.showVillage;
    };
    MandalDetailsPage.prototype.toggleSchools = function () {
        this.showSchool = !this.showSchool;
    };
    MandalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mandal-details',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Mandals\mandal-details\mandal-details.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>{{mandal.Name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n\n  <ion-row>\n  <ion-col col-6>\n  <ion-card>\n    <ion-navbar color="primary" (click)="toggleVillages()" class="curs" >\n      <ion-title>Villages</ion-title>\n      <ion-buttons end>\n      <button ion-button large clear>{{mandal.Villages}}</button>\n      <button ion-button clear icon-only  *ngIf="!showVillage" (click)="toggleVillages()">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n      <button ion-button clear icon-only  *ngIf="showVillage" (click)="toggleVillages()">\n        <ion-icon name="ios-arrow-up"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-navbar>\n\n    <ion-card-content *ngIf="showVillage" >\n      <ion-item *ngFor="let v of villages" >\n        <button item-start clear ion-button color="dark" large>{{v.Name}}</button>\n        <button ion-button item-end clear (click)="gtVillageDetails(v)" >Details</button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  </ion-col>\n</ion-row>\n\n\n\n\n\n\n<ion-row>\n<ion-col col-6>\n  <ion-card>\n    <ion-navbar color="primary" (click)="toggleSchools()" class="curs" >\n      <ion-title>Schools</ion-title>\n      <ion-buttons end>\n      <button ion-button large clear>{{mandal.Schools}}</button>\n      <button ion-button clear icon-only  *ngIf="!showSchool" (click)="toggleSchools()">\n        <ion-icon name="ios-arrow-down"></ion-icon>\n      </button>\n      <button ion-button clear icon-only  *ngIf="showSchool" (click)="toggleSchools()">\n        <ion-icon name="ios-arrow-up"></ion-icon>\n      </button>\n      </ion-buttons>\n    </ion-navbar>\n\n    <ion-card-content *ngIf="showSchool" >\n      <ion-item *ngFor="let s of schools" >\n        <button item-start clear ion-button color="dark" large>{{s.Name}}</button>\n        <button ion-button item-end clear (click)="gtSchoolsDetails(s)" >Details</button>\n      </ion-item>\n    </ion-card-content>\n\n\n  </ion-card>\n</ion-col>\n</ion-row>\n\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Mandals\mandal-details\mandal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MandalDetailsPage);
    return MandalDetailsPage;
}());

//# sourceMappingURL=mandal-details.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMandalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_mandals_add_mandals__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mandal_details_mandal_details__ = __webpack_require__(177);
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
    // selArray : Array<any> = [];
    function ViewMandalsPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.areaRef = this.db.list('Subs/Mandals', function (ref) { return ref.orderByChild("Name"); });
        this.area = [];
        this.areasLoaded = [];
        this.getAreas();
    }
    // addToArr(a){
    //   switch (a.Checked) {
    //     case true:  this.selArray.push(a.key);
    //       break;
    //     case false:  this.rmFrmArray(a.key);
    //       break;
    //   }
    // }
    // rmFrmArray(key){
    //   var ind = this.selArray.indexOf(key);
    //   this.selArray.splice(ind,1)
    // }
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
            selector: 'page-view-mandals',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Mandals\view-mandals\view-mandals.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n    <ion-item no-lines class="content">\n    <h1 class="title" item-start>Mandals</h1>\n    </ion-item>\n    </ion-col>\n    <ion-col col-6 push-2 >\n    <ion-searchbar item-end animated="true" placeholder="Search a Mandal" \n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n  \n    <ion-grid>\n      <ion-navbar color="primary">\n        <ion-row>\n          <ion-col col-1>\n          </ion-col>\n          <ion-col col-3>\n            <p class="headBar">Mandal</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Villages</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Schools</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Students</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar"></p>\n          </ion-col>\n        </ion-row>\n      </ion-navbar>\n    </ion-grid>\n\n\n    <ion-grid>\n        <ion-card *ngFor="let a of area;let i = index">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-1  >\n              <p ion-text><strong>{{i+1}}</strong></p>\n            </ion-col>\n            <ion-col col-3>\n              {{a.Name}}\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Villages}}</h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Schools}}</h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Students}}0</h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <button ion-button clear (click)="gtMandalDetails(a)">Details\n                <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n\n\n\n  \n  \n  \n  \n    <ion-fab right bottom>\n      <button ion-fab color="danger" (click)="gtAddArea()" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n    </ion-content>'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Mandals\view-mandals\view-mandals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewMandalsPage);
    return ViewMandalsPage;
}());

//# sourceMappingURL=view-mandals.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
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
            snap.forEach(function (snp) {
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages").child(snp.key).once("value", function (vil) {
                    var temp = vil.val();
                    temp.key = vil.key;
                    _this.villages.push(temp);
                }).then(function () {
                    loading.dismiss();
                });
            });
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
            selector: 'page-add-schools',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Schools\add-schools\add-schools.html"*/'<ion-header>\n    <ion-navbar color="primary" >\n      <ion-title>Add Village</ion-title>\n      <ion-buttons end>\n        <button ion-button clear icon-only (click)="close()">\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card>\n      <ion-card-content>\n\n\n\n        <ion-item>\n          <ion-label floating>Select Mandal</ion-label>\n          <ion-select [(ngModel)]="mandalSel" (ionChange)="getVillages()" >\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf="villages.length" >\n          <ion-label floating>Select Village</ion-label>\n          <ion-select [(ngModel)]="villageSel">\n            <ion-option *ngFor="let v of villages" [value]="v.key">{{v.Name}} </ion-option>\n          </ion-select>\n        </ion-item>\n\n\n\n        <ion-item *ngIf="villageSel" >\n          <ion-label  floating>School Name</ion-label>\n          <ion-input type="text" [(ngModel)]="name"  (ionChange)="capsName(name)" autofocus ></ion-input>\n        </ion-item>\n        \n        <ion-item *ngIf="name.length" >\n          <ion-label  floating>School Total Strength</ion-label>\n          <ion-input type="number" [(ngModel)]="str" (keyup.enter)="checkData()"  ></ion-input>\n        </ion-item>\n  \n      </ion-card-content>\n    </ion-card>\n  \n    <button ion-button *ngIf="name" block (click)="checkData()">Add</button>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Schools\add-schools\add-schools.html"*/,
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSchoolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_schools_add_schools__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__school_details_school_details__ = __webpack_require__(82);
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
    ViewSchoolsPage.prototype.gtAnmDetails = function () {
    };
    ViewSchoolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-schools',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Schools\view-schools\view-schools.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n    <ion-item no-lines class="content">\n    <h1 class="title" item-start>Schools</h1>\n    </ion-item>\n    </ion-col>\n    <ion-col col-6 push-2 >\n    <ion-searchbar item-end animated="true" placeholder="Search a School ..." \n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n  \n      \n    <ion-grid>\n      <ion-navbar color="primary">\n        <ion-row>\n          <ion-col col-1>\n          </ion-col>\n          <ion-col col-3>\n            <p class="headBar">Schools</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Progress %</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Total Students</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">ANM</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar"></p>\n          </ion-col>\n        </ion-row>\n      </ion-navbar>\n    </ion-grid>\n\n\n    <ion-grid>\n        <ion-card *ngFor="let a of area;let i = index">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-1  >\n              <p ion-text><strong>{{i+1}}</strong></p>\n            </ion-col>\n            <ion-col col-3>\n              {{a.Name}}\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">0%</h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Strength}}</h1><br/>\n            </ion-col>\n\n            <ion-col col-2 text-center *ngIf="a.ANM" >\n              <button ion-button (click)="gtAnmDetails()"> {{a.ANM}} </button>\n            </ion-col>\n            \n            <ion-col col-2 text-center *ngIf="!a.ANM" >\n              <h1 ion-text color="primary">No ANM</h1><br/>\n            </ion-col>\n            \n            <ion-col col-2 text-center >\n              <button ion-button clear (click)="gtSchoolDetails(a)">Details\n                <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n\n\n  \n  \n    <ion-fab right bottom>\n      <button ion-fab color="danger" (click)="gtAddArea()" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n    </ion-content>'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Schools\view-schools\view-schools.html"*/,
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

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVillagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
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
            selector: 'page-add-villages',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Villages\add-villages\add-villages.html"*/'<ion-header>\n    <ion-navbar color="primary" >\n      <ion-title>Add Village</ion-title>\n      <ion-buttons end>\n        <button ion-button clear icon-only (click)="close()">\n          <ion-icon name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-card>\n      <ion-card-content>\n\n\n\n        <ion-item>\n          <ion-label floating>Select Mandal</ion-label>\n          <ion-select [(ngModel)]="mandalSel">\n            <ion-option *ngFor="let m of mandals" [value]="m.key">{{m.Name}} </ion-option>\n          </ion-select>\n        </ion-item>\n\n\n        <ion-item *ngIf="mandalSel">\n          <ion-label  floating>Village Name</ion-label>\n          <ion-input type="text" [(ngModel)]="name" (keyup.enter)="checkData()" (ionChange)="capsName(name)" autofocus ></ion-input>\n        </ion-item>\n        \n  \n      </ion-card-content>\n    </ion-card>\n  \n    <button ion-button *ngIf="name" block (click)="checkData()">Add</button>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Villages\add-villages\add-villages.html"*/,
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewVillagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_villages_add_villages__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__village_details_village_details__ = __webpack_require__(103);
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
    function ViewVillagesPage(navCtrl, db, toastCtrl, alertCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.areaRef = this.db.list('Subs/Villages');
        this.area = [];
        this.areasLoaded = [];
        this.areaFRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Subs/Villages");
        this.getAreas();
    }
    ViewVillagesPage.prototype.getAreas = function () {
        var _this = this;
        this.areaRef.snapshotChanges().subscribe(function (snap) {
            var tempArray = [];
            snap.forEach(function (snp) {
                var temp = snp.payload.val();
                temp.key = snp.key;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("SubsIndex/Villages").child(snp.key).child("Schools").once("value", function (schoolsSnap) {
                    temp.Schools = schoolsSnap.numChildren();
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
    ViewVillagesPage.prototype.gtAddArea = function () {
        var areaAdd = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_villages_add_villages__["a" /* AddVillagesPage */], null, { enableBackdropDismiss: false });
        areaAdd.present();
    };
    ViewVillagesPage.prototype.gtVillageDetails = function (v) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__village_details_village_details__["a" /* VillageDetailsPage */], { village: v });
    };
    ViewVillagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-villages',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Villages\view-villages\view-villages.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 >\n    <ion-item no-lines class="content">\n    <h1 class="title" item-start>Villages</h1>\n    </ion-item>\n    </ion-col>\n    <ion-col col-6 push-2 >\n    <ion-searchbar item-end animated="true" placeholder="Search a Village" \n    [(ngModel)]="searchbar" (ionInput)="getItems(searchbar)"></ion-searchbar>\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n  \n  \n    <ion-grid>\n      <ion-navbar color="primary">\n        <ion-row>\n          <ion-col col-1>\n          </ion-col>\n          <ion-col col-3>\n            <p class="headBar">Villages</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Schools</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar">Students</p>\n          </ion-col>\n          <ion-col col-2>\n            <p class="headBar"></p>\n          </ion-col>\n        </ion-row>\n      </ion-navbar>\n    </ion-grid>\n\n\n    <ion-grid>\n        <ion-card *ngFor="let a of area;let i = index">\n        <ion-card-content>\n          <ion-row>\n            <ion-col col-1  >\n              <p ion-text><strong>{{i+1}}</strong></p>\n            </ion-col>\n            <ion-col col-3>\n              {{a.Name}}\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Schools}}</h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <h1 ion-text color="primary">{{a.Students}}0</h1><br/>\n            </ion-col>\n            <ion-col col-2 text-center >\n              <button ion-button clear (click)="gtVillageDetails(a)">Details\n                <ion-icon padding-left name="md-arrow-round-forward"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-grid>\n  \n  \n  \n  \n    <ion-fab right bottom>\n      <button ion-fab color="danger" (click)="gtAddArea()" >\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-fab>\n    </ion-content>'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Villages\view-villages\view-villages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ViewVillagesPage);
    return ViewVillagesPage;
}());

//# sourceMappingURL=view-villages.js.map

/***/ }),

/***/ 220:
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
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Extra/dashboard/dashboard.module": [
		693,
		17
	],
	"../pages/Extra/login/login.module": [
		694,
		16
	],
	"../pages/Students/student-details/student-details.module": [
		695,
		15
	],
	"../pages/Students/students/students.module": [
		696,
		14
	],
	"../pages/Subs/Anms/add-amns/add-amns.module": [
		697,
		13
	],
	"../pages/Subs/Anms/anm-details/anm-details.module": [
		698,
		12
	],
	"../pages/Subs/Anms/assign-school/assign-school.module": [
		699,
		11
	],
	"../pages/Subs/Anms/del-anm/del-anm.module": [
		700,
		10
	],
	"../pages/Subs/Anms/view-amns/view-amns.module": [
		701,
		9
	],
	"../pages/Subs/Mandals/add-mandals/add-mandals.module": [
		702,
		8
	],
	"../pages/Subs/Mandals/mandal-details/mandal-details.module": [
		703,
		7
	],
	"../pages/Subs/Mandals/view-mandals/view-mandals.module": [
		704,
		6
	],
	"../pages/Subs/Schools/add-schools/add-schools.module": [
		705,
		5
	],
	"../pages/Subs/Schools/school-details/school-details.module": [
		706,
		4
	],
	"../pages/Subs/Schools/view-schools/view-schools.module": [
		707,
		3
	],
	"../pages/Subs/Villages/add-villages/add-villages.module": [
		708,
		2
	],
	"../pages/Subs/Villages/view-villages/view-villages.module": [
		709,
		1
	],
	"../pages/Subs/Villages/village-details/village-details.module": [
		710,
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
webpackAsyncContext.id = 261;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 444:
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
            selector: 'page-student-details',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Students\student-details\student-details.html"*/'<!--\n  Generated template for the StudentDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>studentDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Students\student-details\student-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], StudentDetailsPage);
    return StudentDetailsPage;
}());

//# sourceMappingURL=student-details.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(579);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseCred */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Extra_login_login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Subs_Mandals_add_mandals_add_mandals__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Subs_Villages_view_villages_view_villages__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Subs_Villages_add_villages_add_villages__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Subs_Schools_view_schools_view_schools__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Subs_Schools_add_schools_add_schools__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Subs_Anms_view_amns_view_amns__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Subs_Anms_add_amns_add_amns__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Subs_Mandals_mandal_details_mandal_details__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Subs_Schools_school_details_school_details__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_Subs_Villages_village_details_village_details__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_Students_students_students__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Students_student_details_student_details__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_Subs_Anms_anm_details_anm_details__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Subs_Anms_assign_school_assign_school__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_Subs_Anms_del_anm_del_anm__ = __webpack_require__(175);
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
                        { loadChildren: '../pages/Subs/Anms/view-amns/view-amns.module#ViewAmnsPageModule', name: 'ViewAmnsPage', segment: 'view-amns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/add-mandals/add-mandals.module#AddMandalsPageModule', name: 'AddMandalsPage', segment: 'add-mandals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/mandal-details/mandal-details.module#MandalDetailsPageModule', name: 'MandalDetailsPage', segment: 'mandal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Mandals/view-mandals/view-mandals.module#ViewMandalsPageModule', name: 'ViewMandalsPage', segment: 'view-mandals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/add-schools/add-schools.module#AddSchoolsPageModule', name: 'AddSchoolsPage', segment: 'add-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/school-details/school-details.module#SchoolDetailsPageModule', name: 'SchoolDetailsPage', segment: 'school-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Schools/view-schools/view-schools.module#ViewSchoolsPageModule', name: 'ViewSchoolsPage', segment: 'view-schools', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/add-villages/add-villages.module#AddVillagesPageModule', name: 'AddVillagesPage', segment: 'add-villages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/view-villages/view-villages.module#ViewVillagesPageModule', name: 'ViewVillagesPage', segment: 'view-villages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Subs/Villages/village-details/village-details.module#VillageDetailsPageModule', name: 'VillageDetailsPage', segment: 'village-details', priority: 'low', defaultHistory: [] }
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

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 272,
	"./af.js": 272,
	"./ar": 273,
	"./ar-dz": 274,
	"./ar-dz.js": 274,
	"./ar-kw": 275,
	"./ar-kw.js": 275,
	"./ar-ly": 276,
	"./ar-ly.js": 276,
	"./ar-ma": 277,
	"./ar-ma.js": 277,
	"./ar-sa": 278,
	"./ar-sa.js": 278,
	"./ar-tn": 279,
	"./ar-tn.js": 279,
	"./ar.js": 273,
	"./az": 280,
	"./az.js": 280,
	"./be": 281,
	"./be.js": 281,
	"./bg": 282,
	"./bg.js": 282,
	"./bm": 283,
	"./bm.js": 283,
	"./bn": 284,
	"./bn.js": 284,
	"./bo": 285,
	"./bo.js": 285,
	"./br": 286,
	"./br.js": 286,
	"./bs": 287,
	"./bs.js": 287,
	"./ca": 288,
	"./ca.js": 288,
	"./cs": 289,
	"./cs.js": 289,
	"./cv": 290,
	"./cv.js": 290,
	"./cy": 291,
	"./cy.js": 291,
	"./da": 292,
	"./da.js": 292,
	"./de": 293,
	"./de-at": 294,
	"./de-at.js": 294,
	"./de-ch": 295,
	"./de-ch.js": 295,
	"./de.js": 293,
	"./dv": 296,
	"./dv.js": 296,
	"./el": 297,
	"./el.js": 297,
	"./en-au": 298,
	"./en-au.js": 298,
	"./en-ca": 299,
	"./en-ca.js": 299,
	"./en-gb": 300,
	"./en-gb.js": 300,
	"./en-ie": 301,
	"./en-ie.js": 301,
	"./en-il": 302,
	"./en-il.js": 302,
	"./en-nz": 303,
	"./en-nz.js": 303,
	"./eo": 304,
	"./eo.js": 304,
	"./es": 305,
	"./es-do": 306,
	"./es-do.js": 306,
	"./es-us": 307,
	"./es-us.js": 307,
	"./es.js": 305,
	"./et": 308,
	"./et.js": 308,
	"./eu": 309,
	"./eu.js": 309,
	"./fa": 310,
	"./fa.js": 310,
	"./fi": 311,
	"./fi.js": 311,
	"./fo": 312,
	"./fo.js": 312,
	"./fr": 313,
	"./fr-ca": 314,
	"./fr-ca.js": 314,
	"./fr-ch": 315,
	"./fr-ch.js": 315,
	"./fr.js": 313,
	"./fy": 316,
	"./fy.js": 316,
	"./gd": 317,
	"./gd.js": 317,
	"./gl": 318,
	"./gl.js": 318,
	"./gom-latn": 319,
	"./gom-latn.js": 319,
	"./gu": 320,
	"./gu.js": 320,
	"./he": 321,
	"./he.js": 321,
	"./hi": 322,
	"./hi.js": 322,
	"./hr": 323,
	"./hr.js": 323,
	"./hu": 324,
	"./hu.js": 324,
	"./hy-am": 325,
	"./hy-am.js": 325,
	"./id": 326,
	"./id.js": 326,
	"./is": 327,
	"./is.js": 327,
	"./it": 328,
	"./it.js": 328,
	"./ja": 329,
	"./ja.js": 329,
	"./jv": 330,
	"./jv.js": 330,
	"./ka": 331,
	"./ka.js": 331,
	"./kk": 332,
	"./kk.js": 332,
	"./km": 333,
	"./km.js": 333,
	"./kn": 334,
	"./kn.js": 334,
	"./ko": 335,
	"./ko.js": 335,
	"./ky": 336,
	"./ky.js": 336,
	"./lb": 337,
	"./lb.js": 337,
	"./lo": 338,
	"./lo.js": 338,
	"./lt": 339,
	"./lt.js": 339,
	"./lv": 340,
	"./lv.js": 340,
	"./me": 341,
	"./me.js": 341,
	"./mi": 342,
	"./mi.js": 342,
	"./mk": 343,
	"./mk.js": 343,
	"./ml": 344,
	"./ml.js": 344,
	"./mn": 345,
	"./mn.js": 345,
	"./mr": 346,
	"./mr.js": 346,
	"./ms": 347,
	"./ms-my": 348,
	"./ms-my.js": 348,
	"./ms.js": 347,
	"./mt": 349,
	"./mt.js": 349,
	"./my": 350,
	"./my.js": 350,
	"./nb": 351,
	"./nb.js": 351,
	"./ne": 352,
	"./ne.js": 352,
	"./nl": 353,
	"./nl-be": 354,
	"./nl-be.js": 354,
	"./nl.js": 353,
	"./nn": 355,
	"./nn.js": 355,
	"./pa-in": 356,
	"./pa-in.js": 356,
	"./pl": 357,
	"./pl.js": 357,
	"./pt": 358,
	"./pt-br": 359,
	"./pt-br.js": 359,
	"./pt.js": 358,
	"./ro": 360,
	"./ro.js": 360,
	"./ru": 361,
	"./ru.js": 361,
	"./sd": 362,
	"./sd.js": 362,
	"./se": 363,
	"./se.js": 363,
	"./si": 364,
	"./si.js": 364,
	"./sk": 365,
	"./sk.js": 365,
	"./sl": 366,
	"./sl.js": 366,
	"./sq": 367,
	"./sq.js": 367,
	"./sr": 368,
	"./sr-cyrl": 369,
	"./sr-cyrl.js": 369,
	"./sr.js": 368,
	"./ss": 370,
	"./ss.js": 370,
	"./sv": 371,
	"./sv.js": 371,
	"./sw": 372,
	"./sw.js": 372,
	"./ta": 373,
	"./ta.js": 373,
	"./te": 374,
	"./te.js": 374,
	"./tet": 375,
	"./tet.js": 375,
	"./tg": 376,
	"./tg.js": 376,
	"./th": 377,
	"./th.js": 377,
	"./tl-ph": 378,
	"./tl-ph.js": 378,
	"./tlh": 379,
	"./tlh.js": 379,
	"./tr": 380,
	"./tr.js": 380,
	"./tzl": 381,
	"./tzl.js": 381,
	"./tzm": 382,
	"./tzm-latn": 383,
	"./tzm-latn.js": 383,
	"./tzm.js": 382,
	"./ug-cn": 384,
	"./ug-cn.js": 384,
	"./uk": 385,
	"./uk.js": 385,
	"./ur": 386,
	"./ur.js": 386,
	"./uz": 387,
	"./uz-latn": 388,
	"./uz-latn.js": 388,
	"./uz.js": 387,
	"./vi": 389,
	"./vi.js": 389,
	"./x-pseudo": 390,
	"./x-pseudo.js": 390,
	"./yo": 391,
	"./yo.js": 391,
	"./zh-cn": 392,
	"./zh-cn.js": 392,
	"./zh-hk": 393,
	"./zh-hk.js": 393,
	"./zh-tw": 394,
	"./zh-tw.js": 394
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
webpackContext.id = 625;

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Extra_login_login__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Extra_dashboard_dashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Subs_Mandals_view_mandals_view_mandals__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Subs_Villages_view_villages_view_villages__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Subs_Schools_view_schools_view_schools__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Students_students_students__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Subs_Anms_view_amns_view_amns__ = __webpack_require__(102);
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
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_Subs_Anms_view_amns_view_amns__["a" /* ViewAmnsPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\app\app.html"*/'<ion-split-pane  >\n  <ion-menu [content]="content" [class.fullPain]="!full" [class.halfPain]="full" >\n    <ion-header>\n      <ion-toolbar color="dark">\n        <h1 *ngIf="full" class="t">Samatha Admin</h1>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="no-scroll bg-semidark">\n\n      <ion-list no-lines *ngIf="full" >\n        <button menuClose color="dark" [class.activeHighlight]="checkActive(p)" \n        ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon class="menu-icon" item-left [name]="p.icon" [color]="p.color" ></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list no-lines *ngIf="!full" >\n        <button menuClose color="dark" [class.activeHighlight]="checkActive(p)" \n        ion-item *ngFor="let p of pages" (click)="openPage(p)" icon-only >\n          <ion-icon class="menu-icon" item-left [name]="p.icon" [color]="p.color" ></ion-icon>\n        </button>\n      </ion-list>\n\n    </ion-content>\n    <ion-footer class="menu-footer">\n      <ion-list no-lines>\n      <button ion-button block *ngIf="full"  (click)="signOut()" color="danger">\n        Sign Out\n      </button>\n      <button ion-item block icon-only *ngIf="!full" (click)="signOut()" color="danger">\n        <ion-icon name="md-power" item-left ></ion-icon>\n      </button>\n\n\n      <button menuClose color="dark" *ngIf="full" ion-item (click)="collapse()">\n        <ion-icon class="menu-icon" item-end name="md-arrow-dropleft" color="whiter" ></ion-icon>\n      </button>\n\n      <button menuClose color="dark" *ngIf="!full" ion-item (click)="expand()">\n        <ion-icon class="menu-icon" item-end name="md-arrow-dropright" color="whiter" ></ion-icon>\n      </button>\n      </ion-list>\n    </ion-footer>\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailsPage; });
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


var SchoolDetailsPage = /** @class */ (function () {
    function SchoolDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.school = this.navParams.get("school");
        console.log(this.school);
    }
    SchoolDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-school-details',template:/*ion-inline-start:"C:\Users\pc\Desktop\sa\src\pages\Subs\Schools\school-details\school-details.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>{{school.Name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\sa\src\pages\Subs\Schools\school-details\school-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SchoolDetailsPage);
    return SchoolDetailsPage;
}());

//# sourceMappingURL=school-details.js.map

/***/ })

},[445]);
//# sourceMappingURL=main.js.map