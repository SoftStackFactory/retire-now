import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public _user: UserProvider) {

  this.extRact();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewTutorial(){
    this.navCtrl.push('TutorialPage')
  }

  logout(){
    this._user.onLogout(); 
    this.navCtrl.push('LandingPage')
  }

extRact(){
  this.data = sessionStorage.getItem('userInfo')
  let viewName = JSON.parse(this.data);
  console.log(viewName);
}
  
}

