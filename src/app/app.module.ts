import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { LoginPage } from '../pages/Extra/login/login';
import { UsersPage } from '../pages/Users/users/users';
import { UserDetailsPage } from '../pages/Users/user-details/user-details';
import { UserOptionsPage } from '../pages/Users/user-options/user-options';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ViewMandalsPage } from '../pages/Subs/Mandals/view-mandals/view-mandals';
import { AddMandalsPage } from '../pages/Subs/Mandals/add-mandals/add-mandals';
import { ViewVillagesPage } from '../pages/Subs/Villages/view-villages/view-villages';
import { AddVillagesPage } from '../pages/Subs/Villages/add-villages/add-villages';
import { ViewSchoolsPage } from '../pages/Subs/Schools/view-schools/view-schools';
import { AddSchoolsPage } from '../pages/Subs/Schools/add-schools/add-schools';
import { ViewAmnsPage } from '../pages/Subs/Anms/view-amns/view-amns';
import { AddAmnsPage } from '../pages/Subs/Anms/add-amns/add-amns';
import { AssignJobPage } from '../pages/assign-job/assign-job';



export const firebaseCred = {
  apiKey: "AIzaSyBBngtTf37X5L59EnuqNnWlGFRqhgwmWQU",
  authDomain: "samatha-8edcd.firebaseapp.com",
  databaseURL: "https://samatha-8edcd.firebaseio.com",
  projectId: "samatha-8edcd",
  storageBucket: "samatha-8edcd.appspot.com",
  messagingSenderId: "659890863002"
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
    ViewMandalsPage,
    AddMandalsPage,
    ViewVillagesPage,
    AddVillagesPage,
    ViewSchoolsPage,
    AddSchoolsPage,
    ViewAmnsPage,
    AddAmnsPage,
    AssignJobPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
    ViewMandalsPage,
    AddMandalsPage,
    ViewVillagesPage,
    AddVillagesPage,
    ViewSchoolsPage,
    AddSchoolsPage,
    ViewAmnsPage,
    AddAmnsPage,
    AssignJobPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
