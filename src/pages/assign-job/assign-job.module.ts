import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignJobPage } from './assign-job';

@NgModule({
  declarations: [
    AssignJobPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignJobPage),
  ],
})
export class AssignJobPageModule {}
