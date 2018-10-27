import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VillageDetailsPage } from './village-details';

@NgModule({
  declarations: [
    VillageDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VillageDetailsPage),
  ],
})
export class VillageDetailsPageModule {}
