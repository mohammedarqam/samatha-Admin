import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSchoolsPage } from './add-schools';

@NgModule({
  declarations: [
    AddSchoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSchoolsPage),
  ],
})
export class AddSchoolsPageModule {}
