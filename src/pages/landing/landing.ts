import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  doLogin(){
    this.navCtrl.push('LoginPage');
  }
  doRegister(){
    this.navCtrl.push('RegisterPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
