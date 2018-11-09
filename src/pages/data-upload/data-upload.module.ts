import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataUploadPage } from './data-upload';

@NgModule({
  declarations: [
    DataUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(DataUploadPage),
  ],
})
export class DataUploadPageModule {}
