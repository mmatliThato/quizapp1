import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifesciencesPage } from './lifesciences';

@NgModule({
  declarations: [
    LifesciencesPage,
  ],
  imports: [
    IonicPageModule.forChild(LifesciencesPage),
  ],
})
export class LifesciencesPageModule {}
