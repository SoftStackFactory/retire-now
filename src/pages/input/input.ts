import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TooltipsModule } from 'ionic-tooltips';
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
  data: any; 
  userInfo: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder, 
              public _user: UserProvider,
            ) { 
              this.extRact()

    this.inputForm = this.formBuilder.group({
      dor: ['', Validators.required],
      fra$: ['', Validators.required],
      profile: ['', Validators.required],
    });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }

  minDOR: any;
  maxDOR: any;

  extRact(){
    this.data = sessionStorage.getItem('userInfo')
    this.userInfo = JSON.parse(this.data);
    console.log("this.userInfo", this.userInfo);
    console.log("this.userInfo.userData.myDOB", this.userInfo.userData.dob)
    this._user.inputDORCalc(this.userInfo.userData.dob);
    this.minDOR = this._user.minDOR; 
    this.maxDOR = this._user.maxDOR;
    console.log(this.maxDOR);
    console.log(this.minDOR); 
  }

  onSubmit(){

    
    

  let userData = {
      fraMonths: 0,
      FRAAge: 0,
      FRADate: "2022-05-20",
      profileName: "profile1",
      myFRAAmt: 1000,
      myDOR: "2020-01-20",
      myDOB: "1965-01-15" 
  }
  let userObject: object = {};

    userData.myFRAAmt = this.inputForm.value.fra$;
    userData.profileName = this.inputForm.value.profile;
    userData.myDOR = this.inputForm.value.dor;
  //userData.profileName = 
    //have the get request pull the data object for that user id
   
    this._user.getUserData()    
      .subscribe((res: any) => {
      console.log("this is the response from get request", res);
      userData.fraMonths = res.totalFRAMonths;
      userData.FRAAge = res.fraAge;
      userData.FRADate = res.fraDate; 
      userData.myDOB = res.dob;

    }, (err:any) => {
      //add error handling here
    }, () => {
      //
      console.log(userData)
      this._user.runRetireNowCalc(userData)
        .subscribe((res: any) => {
        console.log("this is the response from the res", res);
        userObject = res;
      }, (err:any) => {
        //add error handling here
      }, () => {
        this._user.postProfile(userObject)
        .subscribe((res:any) => {
        console.log("this is the response from posting profile", res);
        sessionStorage.setItem("profileId", res.id)
        this.navCtrl.setRoot('ResultsPage');
        })
        , (err:any) => {
        //add error handling here
        }

      })
    })

 
    //take the user object data and push it into a data object for sending to backend
  
    //take the user input and the combined data from the get request and build the userData object


    //send the userData object to the backend via the called remotemethod
    //post.remoteMethod(userData);

    
    console.log("On submit worked");
    let userId = sessionStorage.getItem("userId")
    console.log("session storage id", userId)
 
   

  }


  logType(){

    if(this.inputForm.status==="VALID" && this.inputForm.touched) {
      console.log(this.inputForm)
      console.log('Submit the form!')
    } else {
      console.log('Dont Submit the form!')
      alert('Form was incorrect!!')
    }
    
    console.log(this.inputForm.value)
  }



}
