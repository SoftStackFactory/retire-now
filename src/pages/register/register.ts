import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';


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

  registerInput: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private _user: UserProvider
      ) {
    
    this.registerInput=this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      vpassword: ['', Validators.required],
      dob: ['', Validators.required],

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  //form builder function that allows for register input to become validated
  onForm(){
    console.log(this.registerInput.value)
  }

  }
