import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  sum:number;
  val=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  France(){
    this.val = this.val+5;
  }
  westv(){
    this.val = this.val+5;
  }
  Plato(){
    this.val = this.val+5;
  }
  CT(){
    this.val = this.val+5;
  }
  Benjamin(){
    this.val = this.val+5;
  }
  getTotal(){
    this.sum=this.val;
  }
}