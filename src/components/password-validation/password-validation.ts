import { Component } from '@angular/core';
import {AbstractControl} from '@angular/forms';

/**
 * Generated class for the PasswordValidationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'password-validation',
  templateUrl: 'password-validation.html'
})
export class PasswordValidationComponent {

  text: string;

  constructor() {
    console.log('Hello PasswordValidationComponent Component');
    this.text = 'Hello World';
  }

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
     if(password != confirmPassword) {
         console.log('false');
         AC.get('confirmPassword').setErrors( {MatchPassword: true} )
     } else {
         console.log('true');
         return null
     }
 }

}
