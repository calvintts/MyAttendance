import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

    apiUrl = 'https://hack-fresno18.herokuapp.com';
    // apiUrl = 'localhost:3000';

    result:any;
  constructor(private http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

    stopAttendance(){
      return new Promise((resolve,reject)=>{
        this.http.get(this.apiUrl+'/class/end')
        .subscribe(res=>{
          resolve(res);},
          (err)=>{
            reject(err);
          });
        });
    }

    userLogin(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/users/login', data)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
    });
  }

  instructorLogin(data) {
  return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/instructor/login', data)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
  });
}

}
