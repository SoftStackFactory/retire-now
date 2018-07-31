import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';
import { TabsPage } from "../tabs/tabs";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      passWord: ['', [Validators.pattern('^[a-zA-Z0-9._-](?=.*[!@#\$%\^&\*]).{6,8}$'), Validators.required]],
    });
  }

  // '^[a-zA-Z0-9._-](?=.*[!@#\$%\^&\*]).{6,8}$'
  //^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*]){6,8}$

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.todo);
  }

  logForm(){
    console.log(this.todo)
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


