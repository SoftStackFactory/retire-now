import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputPage } from './input';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    InputPage,
  ],
  imports: [
    IonicPageModule.forChild(InputPage),
  ],
  exports: [InputPage]
})
export class InputPageModule {}
