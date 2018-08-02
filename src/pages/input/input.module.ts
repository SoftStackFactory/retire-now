import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputPage } from './input';

@NgModule({
  declarations: [
    InputPage,
  ],
  imports: [
    IonicPageModule.forChild(InputPage),
  ],
  exports:[InputPage]
})
export class InputPageModule {}
