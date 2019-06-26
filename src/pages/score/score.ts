import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { HomePage } from '../home/home';
import { CategoriesPage } from '../categories/categories';
import { MusicPage } from '../music/music';

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  total:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProv: DataStoreProvider) {}

  ionViewDidLoad() {
   this.total = this.dataProv.grandTotal;
  }
  openhome(){
    this.dataProv.reset();
    this.navCtrl.push(HomePage);
  }
  opencategories(){
    this.dataProv.reset()
    this.navCtrl.push(CategoriesPage);
  }
  
 
}
