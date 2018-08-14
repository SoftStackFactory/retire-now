import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TooltipsModule } from 'ionic-tooltips';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

    this.lala = this.formBuilder.group({

      frA: ['', Validators.required],
      erA: ['', Validators.required],
      sS: ['', Validators.required],
      proFile: ['', Validators.required],
      
      
    });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }


  logType(){

    if(this.lala.status==="VALID" && this.lala.touched) {
      console.log(this.lala)
      console.log('Submit the form!')
    } else {
      console.log('Dont Submit the form!')
      alert('Form was incorrect!!')
    }
    
  }



}
