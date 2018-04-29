import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import {AttendanceSheetsProvider} from "../../providers/attendance-sheets/attendance-sheets";

/**
 * Generated class for the AttendancesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attendancesheet',
  templateUrl: 'attendancesheet.html',
})

export class AttendancesheetPage {
  options: GeolocationOptions;
  position: Geoposition;

  startAttendanceInfo = {classNumber:''};
  constructor(public navCtrl: NavController,public geolocation: Geolocation, public attendanceProvider: AttendanceSheetsProvider) {

  }

  startAttendance(){

    // function onError(error) {
    //     alert('code: '    + error.code    + '\n' +
    //           'message: ' + error.message + '\n');
    // }
    //
    // this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
    //     this.position = pos;
    //     // let param = {"classNumber": this.startAttendanceInfo.classNumber, "location": this.position};
    //     // this.attendanceProvider.startAttendance(param).then(result)
    //     console.log(pos);
    // }, (err : PositionError) =>{
    //   console.log("error: " + err.message );
    // });
    //   let param = {"classNumber": this.startAttendanceInfo.classNumber, "location": this.position};
    //   this.attendanceProvider.startAttendance(param).then(result)


    //
    //   navigator.geolocation.getCurrentPosition(this.position, onError);
    //   let locationdata = [position.coords.longitude, position.coords.latitude];
    //   let param = {"classNumber":startAttendanceInfo.classNumber, "location":locationdata};
    //   this.httpClient.post(apiUrl,param).then((result)=>{
    //   if(result){
    //     console.log(result);
    //   }
    // },(err)=>{
    //   console.log(err);
    // });

      this.geolocation.getCurrentPosition().then((pos:Geoposition) => {
        this.position = pos;
        console.log(pos);
      });
  }
}
