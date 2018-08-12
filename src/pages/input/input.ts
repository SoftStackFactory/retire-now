import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage {

  lala : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public _user: UserProvider) {

    this.lala = this.formBuilder.group({
      doB: ['', Validators.required],
      frA: ['', Validators.required],
      sS: ['', Validators.required],
      proFile: ['', Validators.required],
      
    });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

  onSubmit(){
    
  }


  logType(){
    console.log(this.lala.value)
  }

}
