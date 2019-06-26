import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { ScorePage } from '../score/score';

@IonicPage()
@Component({
  selector: 'page-art',
  templateUrl: 'art.html',
})
export class ArtPage {
  @ViewChild('slides') slides: Slides;
  title: string;
  questions: any;
  lastSlide: any = false;
  grandTotal: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, private datastoreProv: DataStoreProvider) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.data;
    this.questions = this.datastoreProv.questions;
    console.log(this.questions);
    this.slides.lockSwipeToPrev(true);
  }
  getCorrect(value){
    if (value == true){  
      this.datastoreProv.setTotal(20);
    } else {
      console.log('False');
      
    }
    this.slides.slideNext();
    if (this.slides.isEnd() == true){
      this.lastSlide = true;
    }
  }
  toResults(){
    this.navCtrl.push(ScorePage);
  }
  reset(){
    this.grandTotal=0;
}
}
