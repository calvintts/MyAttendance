import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider} from '../../providers/login-service/login-service';
import { AttendancesheetPage } from '../attendancesheet/attendancesheet';
/**
 * Generated class for the CloseAttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-close-attendance',
  templateUrl: 'close-attendance.html',
})
export class CloseAttendancePage {

  constructor(public navCtrl: NavController, public getHelper: LoginServiceProvider) {
  }

  stopAttendance(){
    this.getHelper.stopAttendance().then((result)=>{
      console.log(result);
      if(result){
        this.navCtrl.push(attendancesheetPage);
      }
    })
  }
}
