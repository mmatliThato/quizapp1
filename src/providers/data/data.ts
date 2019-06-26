import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class DataProvider {
  questions: any;
  constructor(public http: Http, public data: DataProvider) {
    console.log('Hello DataProvider Provider');

  }
  
  
  
}
