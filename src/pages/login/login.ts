import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';
import { TabsPage } from "../tabs/tabs";
import { UserProvider} from '../../providers/user/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   todo : FormGroup;
   user={};

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public _user: UserProvider) {

    this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logForm(){
    console.log(this.todo.value)
  }

  doDashboard(){
    this.navCtrl.setRoot('DashboardPage');
  }

  doTabs(){
    this.navCtrl.setRoot('TabsPage');
  }

  doRegister(){
    this.navCtrl.setRoot('RegisterPage');
  }

}


