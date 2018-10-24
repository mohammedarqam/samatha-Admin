import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVillagesPage } from './add-villages';

@NgModule({
  declarations: [
    AddVillagesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVillagesPage),
  ],
})
export class AddVillagesPageModule {}
