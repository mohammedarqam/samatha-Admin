import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeleteStudentsPage } from './delete-students';

@NgModule({
  declarations: [
    DeleteStudentsPage,
  ],
  imports: [
    IonicPageModule.forChild(DeleteStudentsPage),
  ],
})
export class DeleteStudentsPageModule {}
