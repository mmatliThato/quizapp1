import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataStoreProvider {
  questions: any;
  grandTotal: number = 0;
  constructor(public http: HttpClient) {
    console.log('Hello DataStoreProvider Provider');
  }
  setQuestions(value){
    this.questions = value;
  }
  setTotal(val){
    this.grandTotal += val;
    console.log(this.grandTotal);
  
  }
  reset(){
    this.grandTotal=0;
  }
  
 }


