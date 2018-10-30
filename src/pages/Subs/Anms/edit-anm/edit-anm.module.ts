import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAnmPage } from './edit-anm';

@NgModule({
  declarations: [
    EditAnmPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAnmPage),
  ],
})
export class EditAnmPageModule {}
