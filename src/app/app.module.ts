import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScorePage } from '../pages/score/score';


import { CategoriesPage  } from '../pages/categories/categories';
import { MusicPage } from '../pages/music/music';
import { ComputerPage } from '../pages/computer/computer';
import { GeographyPage } from '../pages/geography/geography';
import { ArtPage } from '../pages/art/art';
import {  LifesciencesPage } from '../pages/lifesciences/lifesciences';

import { DataStoreProvider } from '../providers/data-store/data-store';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoriesPage,
    MusicPage,
    ComputerPage,
    ArtPage,
    GeographyPage,
    LifesciencesPage,
    ScorePage 


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoriesPage,
    MusicPage,
    ComputerPage,
    ArtPage,
    GeographyPage,
    LifesciencesPage,
    ScorePage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataStoreProvider
  ]
})
export class AppModule {}
