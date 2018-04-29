import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService} from "angular-webstorage-service";

const STORAGE_KEY = 'pure-awesomeness';

/*
  Generated class for the SessionStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionStorageProvider {

  constructor(@Inject(SESSION_STORAGE) public storage: StorageService) {
    console.log('Hello SessionStorageProvider Provider');
  }

}
