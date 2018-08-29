import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {LoginPage} from '../login/login';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  //navigates from landing to login page
  doLogin() {
    this.navCtrl.push('LoginPage');
  }

  //navigates from lading to register page
  doRegister() {
    this.navCtrl.push('RegisterPage');
  }

}
