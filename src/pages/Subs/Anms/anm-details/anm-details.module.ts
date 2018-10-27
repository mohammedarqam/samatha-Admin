import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnmDetailsPage } from './anm-details';

@NgModule({
  declarations: [
    AnmDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnmDetailsPage),
  ],
})
export class AnmDetailsPageModule {}
