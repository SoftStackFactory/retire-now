import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultsPage } from './results';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultsPage),
    ChartsModule
  ],
})
export class ResultsPageModule {}
