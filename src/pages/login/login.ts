import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {DashboardPage} from '../dashboard/dashboard';
import {RegisterPage} from '../register/register';
import {TabsPage} from "../tabs/tabs";
import {UserProvider} from '../../providers/user/user';

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

  todo: FormGroup;
  user = {};
  error = {message: ''};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              public _user: UserProvider) {

    this.todo = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      passWord: ['', Validators.required],
    });
  }

  // '^[a-zA-Z0-9._-](?=.*[!@#\$%\^&\*]).{6,8}$'
  //^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%\^&\*]){6,8}$

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    //console.log(this.todo);
  }

  logForm() {
    //this.navCtrl.setRoot('TabsPage')
    console.log(this.todo.value)
  }

  doDashboard() {
    this.navCtrl.setRoot('DashboardPage');
  }

  // doTabs(){
  //   this.navCtrl.setRoot('TabsPage');
  // }

  doRegister() {
    this.navCtrl.setRoot('RegisterPage');
  }

  //function to login a user
  submitLog() {
    console.log(this.user);
    this._user.onLog(this.user)
      .subscribe((res: any) => {

        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        this.navCtrl.push('DashboardPage');

      }, (error: any) => {
        if (error.status === 401) {
          console.log('Error Message:', error.message)
          this.error.message = 'you are not a registered user'
        }
        else if (error.status === 400) {
          console.log('Error Message:', error.message)
          this.error.message = 'something went wrong'
        }
        else if (error.status === 404) {
          console.log('Error Message:', error.message)
          this.error.message = 'something went wrong'
        }

      })

  }

}
