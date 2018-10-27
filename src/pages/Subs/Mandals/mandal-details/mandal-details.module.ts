import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MandalDetailsPage } from './mandal-details';

@NgModule({
  declarations: [
    MandalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MandalDetailsPage),
  ],
})
export class MandalDetailsPageModule {}
