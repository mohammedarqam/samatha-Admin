import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDistrictsPage } from './add-districts';

@NgModule({
  declarations: [
    AddDistrictsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDistrictsPage),
  ],
})
export class AddDistrictsPageModule {}
