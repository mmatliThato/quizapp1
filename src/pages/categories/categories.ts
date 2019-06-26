import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicPage } from '../music/music';
import { ComputerPage } from '../computer/computer';
import { ArtPage } from '../art/art';
import { GeographyPage } from '../geography/geography';
import { LifesciencesPage } from '../lifesciences/lifesciences';
import { Categories } from '../../app/model/music/categories.model';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { ThrowStmt } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories = Categories;  

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataStoreProvider) {
  }

  ionViewDidLoad() {
    console.log(this.categories);
  }
  openmusic(){
  this.navCtrl.push( MusicPage);  
  }
  opencomputer(){
    this.navCtrl.push(ComputerPage)
  }
  openArt(){
    this.navCtrl.push( ArtPage)
  }
  opengeography(){
    this.navCtrl.push(GeographyPage)
  }
  openlifescinces(){
    this.navCtrl.push(LifesciencesPage)
  }
  toQuiz(category, questions){
    this.dataProvider.setQuestions(questions);
    this.navCtrl.push(ArtPage, category);
   
  }
}
