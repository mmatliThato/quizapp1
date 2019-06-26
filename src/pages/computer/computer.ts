import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import { ScorePage } from '../score/score';

/**
 * Generated class for the ComputerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computer',
  templateUrl: 'computer.html',
})
export class ComputerPage {
  
  
  sum:number;
  val=0  
  @ViewChild('slides') slides:Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputerPage');
  }
  next(){
    this.slides.slideNext();
}

font(){
  this.val=this.val+5;
}
external(){
  this.val=this.val+5;
}
JavaScript(){
  this.val=this.val+5;
}
Markup(){
  this.val=this.val+5;
}
openscore(){
  this.sum=this.val
  
}
goToScore() {
  this.navCtrl.push(ScorePage,{
    move:this.val
  })
}
}