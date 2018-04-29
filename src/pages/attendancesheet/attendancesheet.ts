import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the AttendancesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendancesheet',
  templateUrl: 'attendancesheet.html',
})

var apiUrl = 'https://hack-fresno18.herokuapp.com';

  result:any;
export class AttendancesheetPage {

  startAttendanceInfo = {classNumber:'',location:''};
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {

  attendanceStart(){
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

      navigator.geolocation.getCurrentPosition(position, onError);
      let locationdata = [position.coords.longitude, position.coords.latitude];
      let param = {"classNumber":classNumber, "location":locationdata};
      this.httpClient.post(apiUrl).then((result)=>{
      if(result){
        console.log(result);
      }
    },(err)=>{
      console.log(err);
    });
}
}
