import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClassNumFinderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClassNumFinderProvider {

    apiUrl = 'https://hack-fresno18.herokuapp.com';
    result:any;

  constructor(public http: HttpClient) {
    console.log('Hello ClassNumFinderProvider Provider');
  }

    classCheckIn(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/attendance/', data)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
