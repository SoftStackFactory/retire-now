import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { InputPageModule } from '../input/input.module';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    InputPageModule
  ],
  exports: [LoginPage]
})
export class LoginPageModule {}
