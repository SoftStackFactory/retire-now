import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


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
    private formBuilder: FormBuilder) {
    
    this.registerInput=this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      vpassword: ['', Validators.required],
      dob: ['', Validators.required],

    });

  }

  //[Validators.pattern('^[a-zA-Z0-9._-](?=.*[!@#\$%\^&\*]).{6,8}$') in case needed use this.
//   userName: ['', [Validators.required, Validators.email]],
//   passWord: ['', [Validators.pattern('^[a-zA-Z0-9._-](?=.*[!@#\$%\^&\*]).{6,8}$'), Validators.required]],
// });

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onForm(){
    console.log(this.registerInput.value)
  }

  }
