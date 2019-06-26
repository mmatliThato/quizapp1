import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import { ScorePage } from '../score/score';

/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
  @ViewChild('slides') slides:Slides;
sum:number;
val=0



constructor(public navCtrl: NavController, public navParams: NavParams) {

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }
  next(){
    this.slides.slideNext();
  }
  openscore(){
this.sum=this.val

   
  }

  
}
