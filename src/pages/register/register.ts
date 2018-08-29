import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {UserProvider} from '../../providers/user/user';
import {PasswordValidationComponent} from '../../components/password-validation/password-validation';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //formgroup to set up validation
  registerInput: FormGroup;
  //need in veryify password and re-enter password are the same
  user = {
    password: "",
    vpassword: ''
  };
  //when an error from trying to login happens 
  error = {message: ''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public _user: UserProvider
  ) {
    //validates the requirements on the form
    this.registerInput = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      vpassword: ['', Validators.required],
      dob: ['', Validators.required],
    }, {
      validator: [PasswordValidationComponent.MatchPassword],

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //form builder function that allows for register input to become validated
  onForm() {
    console.log(this.registerInput.value)
  }

  //function to register a user
  onRegister() {
    console.log("PW", this.registerInput.status == "INVALID")
    console.log("this.user", this.user);
    this._user.onReg(this.user)
      .subscribe((res: any) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        let tempObj = {
          userData: {},
        };
        tempObj.userData = res;
        sessionStorage.setItem('userInfo', JSON.stringify(tempObj))
        console.log("tempObj", tempObj); 
        this.navCtrl.setRoot('TutorialPage');
      }, (error: any) => {
        if (error.status === 401) {
          console.log('Error Message:', error.message)
          this.error.message = 'you are not a registered user'
        } else if (error.status === 422) {
          console.log('Error Message:', error.message)
          this.error.message = 'something went wrong'
        } else if (error.status === 404) {
          console.log('Error Message:', error.message)
          this.error.message = 'you did not enter information above'
        }
      })
  }
//if a user is already registerd, this will take them to the login page
  doLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}
