import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the InputEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-edit',
  templateUrl: 'input-edit.html',
})
export class InputEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public _user: UserProvider, public viewCtrl: ViewController) {

    this.inputForm = this.formBuilder.group({
      dor: ['', Validators.required],
      fra$: ['', Validators.required],
      profile: ['', Validators.required],
    });
   }

  inputForm : FormGroup;
  toggleDate: boolean = false;
  
  
  dor: string;
  fra$: number;
  profileName: string;
  
  dismiss() { this.viewCtrl.dismiss(); }

  dateHide(){
    console.log("datehide is being clicked")
    this.toggleDate = true;
  }

  onSubmit(){
    this._user.profileDataDB.name = this.profileName  ;
    this._user.profileDataDB.fraAmount = this.fra$;
    this._user.profileDataDB.retireDate = this.dor;
    this._user.updateUserProfile()
        .subscribe((res:any) => {
        console.log("this is the response from updating the profile", res);
        sessionStorage.setItem("profileId", res.id)
        this.navCtrl.setRoot('ResultsPage', {isBtn: true});
        })
        , (err:any) => {
        //add error handling here
        }
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
  ionViewDidLoad() {
    console.log(this._user.profileDataDB, "this is the profile data")
    this.profileName = this._user.profileDataDB.name;
    this.fra$ = this._user.profileDataDB.fraAmount;
    this.dor = this._user.profileDataDB.retireDate;
  }
}
