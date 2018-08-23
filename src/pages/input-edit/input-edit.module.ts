import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputEditPage } from './input-edit';

@NgModule({
  declarations: [
    InputEditPage,
  ],
  imports: [
    IonicPageModule.forChild(InputEditPage),
  ],
})
export class InputEditPageModule {}
