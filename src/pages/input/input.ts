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

  inputForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public _user: UserProvider) {

    this.inputForm = this.formBuilder.group({
      dor: ['', Validators.required],
      frA: ['', Validators.required],
      fra$: ['', Validators.required],
      profile: ['', Validators.required],
      
    });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

  exampleData: any = {
    "firstName": "string",
    "lastName": "string",
    "dob": "2018-08-12T23:53:05.513Z",
    "realm": "string",
    "username": "string",
    "email": "string",
    "emailVerified": true,
    "id": "string"
  }

  onSubmit(){
    //send form variables to the user provider
    //send profile name, fraAmount, and retire date to pro
    let userData = {
      FRANumMths: 0,
      FRAAge: 0,
      FRADate: "",
      profileName: "",
      myFRAAmt: 0,
      myDOR: "",
      myDOB: "" 
  }

    userData.myFRAAmt = this.inputForm.value.fra$;
    userData.profileName = this.inputForm.value.profile;
    userData.myDOR = this.inputForm.value.dor;
  //userData.profileName = 
    //have the get request pull the data object for that user id
    console.log("this is the inputform var",this.inputForm);
    console.log("this is the inputform var",);
    // this._user.onSubmit()
    // .subscribe((res: any) => {
    //   console.log(res);
    // })
    //take the user object data and push it into a data object for sending to backend
  
    //take the user input and the combined data from the get request and build the userData object


    //send the userData object to the backend via the called remotemethod
    //post.remoteMethod(userData);

    
    console.log("On submit worked");
    let userId = sessionStorage.getItem("userId")
    console.log("session storage id", userId)
 

  }


  logType(){
    console.log(this.inputForm.value)
  }

}
