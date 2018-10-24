import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMandalsPage } from './add-mandals';

@NgModule({
  declarations: [
    AddMandalsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMandalsPage),
  ],
})
export class AddMandalsPageModule {}
