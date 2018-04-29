import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendancesheetPage } from './attendancesheet';

@NgModule({
  declarations: [
    AttendancesheetPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendancesheetPage),
  ],
})
export class AttendancesheetPageModule {}
