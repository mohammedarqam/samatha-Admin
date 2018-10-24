import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';

import * as firebase from 'firebase';
import { LoginPage } from '../pages/Extra/login/login';
import { UsersPage } from '../pages/Users/users/users';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { ViewDistrictsPage } from '../pages/Subs/Districts/view-districts/view-districts';
import { ViewMandalsPage } from '../pages/Subs/Mandals/view-mandals/view-mandals';
import { ViewVillagesPage } from '../pages/Subs/Villages/view-villages/view-villages';
import { ViewSchoolsPage } from '../pages/Subs/Schools/view-schools/view-schools';
import { AssignJobPage } from '../pages/assign-job/assign-job';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ViewDistrictsPage;
  activePage: any;

  full : boolean = true;

  pages: Array<{ title: string, component: any, icon: any, color : string }>;

  constructor(
    public platform: Platform,    
    public toastCtrl: ToastController,
    ) {
      this.initializeApp();

    this.pages = [
      { title: 'DashBoard', component: DashboardPage, icon: "flash",color: "yellowi" },
      { title: "Districts", component: ViewDistrictsPage, icon: "ios-people",color: "whiter" },
      { title: "Mandals", component: ViewMandalsPage, icon: "ios-people",color: "whiter" },
      { title: "Villages", component: ViewVillagesPage, icon: "ios-people",color: "whiter" },
      { title: "Schools", component: ViewSchoolsPage, icon: "ios-people",color: "whiter" },
      { title: "Anm's", component: UsersPage, icon: "ios-people",color: "whiter" },
      { title: "Assign Job", component: AssignJobPage, icon: "ios-people",color: "whiter" },
    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        firebase.database().ref("Admin Data").child("Admins").child(user.uid).once('value',itemSnap=>{
            if(itemSnap.exists()){
              var welMsg = "Welcome"+" "+itemSnap.val().Name;
              this.rootPage = ViewDistrictsPage;
              this.presentToast(welMsg);
            }else{
              firebase.auth().signOut().then(()=>{
                this.rootPage = LoginPage;
                this.presentToast("You are not registered a Admin")
              })
            }
    });
      }
      else{
        this.rootPage = LoginPage;
      }
    });  
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.nav.setRoot(LoginPage);
      this.presentToast("Signed Out");
    }).catch((error) => {
      console.log(error.message);
    });

 
}
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position : "top",
    showCloseButton: false,
  });
  toast.present();
}
collapse(){
  this.full = false;
}
expand(){
  this.full = true;
}

}
