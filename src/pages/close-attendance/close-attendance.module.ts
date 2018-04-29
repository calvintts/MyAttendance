import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloseAttendancePage } from './close-attendance';

@NgModule({
  declarations: [
    CloseAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(CloseAttendancePage),
  ],
})
export class CloseAttendancePageModule {}
