import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignSchoolPage } from './assign-school';

@NgModule({
  declarations: [
    AssignSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignSchoolPage),
  ],
})
export class AssignSchoolPageModule {}
