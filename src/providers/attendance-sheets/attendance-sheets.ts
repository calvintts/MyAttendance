import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AttendanceSheetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AttendanceSheetsProvider {
    apiUrl = 'https://hack-fresno18.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello AttendanceSheetsProvider Provider');
  }

    startAttendance(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/class/start', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
