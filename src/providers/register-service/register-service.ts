import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

    apiUrl = 'https://hack-fresno18.herokuapp.com';
    // apiUrl = 'localhost:3000';

    result:any;
  constructor(private http: HttpClient) {
    console.log('Hello RegisterServiceProvider Provider');
  }

    userRegister(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/users/register', data)
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
    });
  }

  instructorRegister(data) {
  return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/instructor/register', data)
          .subscribe(res => {
              resolve(res);
          }, (err) => {
              reject(err);
          });
  });
}

}
