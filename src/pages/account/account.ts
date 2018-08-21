import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
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
  viewName:any;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private viewCtrl: ViewController, 
              private appCtrl:App,
              public _user: UserProvider
            ) {
              this.extRact()
            }

  ionViewDidLoad() {
  }

  viewTutorial(){
    this.appCtrl.getRootNav().push('TutorialPage');
  }

  logout(){
    this.appCtrl.getRootNav().push('LandingPage');
    this._user.onLogout("user"); 
  }

extRact(){
  this.data = sessionStorage.getItem('userInfo')
  this.viewName = JSON.parse(this.data);
  console.log(this.viewName);
  console.log(this.viewName.userData.firstName)
}
  
}

