import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environments.dev';
import * as moment from 'moment';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  data={};

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  //api loopback calls below
  
  //base URL to call loopback api
  baseURL:string= ENV.url;
  //loopback add on to register a user
  regURL:string='appUsers/';
  //loopback add on to login in a already registered user
  logInURL:string='login';
  //loopback add on to logout an user
  logOutURL:string='logout/'
  //loopback add on to access profile model
  profileURL:string='profiles';

  isLoggedIn: boolean = false; 
  profileDataDB: any; //stores the profile when the modal input is loaded
  userDOB: any; //User date of birth used in onReg to calculate user FRA data

  //register call to create an account and calculate appUser FRA info
  onReg(user){
    console.log("user.dob", user.dob)
    this.userDOB = user.dob; 
    let totalFRAMonths;
    let fraAge; 
    let myDOBNum = parseInt(this.userDOB.substring(0,4), 10);
    if (this.userDOB.substring(5,11) === "01-01"){
        myDOBNum -= 1; 
      }
        if (myDOBNum >= 1960) {
        totalFRAMonths = 804; 
        fraAge = "67";
        } else if (myDOBNum === 1959) {
        totalFRAMonths = 802;
        fraAge = "67";
        } else if (myDOBNum === 1958) {
        totalFRAMonths = 800   
        fraAge = "67";      
        } else if (myDOBNum === 1957) {
        totalFRAMonths = 798
        fraAge = "66";
        } else if (myDOBNum === 1956) {
        totalFRAMonths = 796
        fraAge = "66";
        } else if (myDOBNum === 1955) {
        totalFRAMonths = 794 
        fraAge = "66";
        } else if (myDOBNum <= 1954 && myDOBNum >= 1948) {
        totalFRAMonths = 792
        fraAge = "66";
        } else {
        totalFRAMonths = "already at 70, trigger"; 
        }
    let fraDate = moment(this.userDOB).add(totalFRAMonths, "months");
    user.totalFRAMonths = totalFRAMonths; 
    user.fraAge = fraAge; 
    user.fraDate = fraDate; 
    return this.http.post(this.baseURL + this.regURL, user)
  };

  //login call after a user has registered 
  onLog(login){
    this.isLoggedIn = true; 
    return this.http.post(this.baseURL + this.regURL + this.logInURL, login)
  };

minDOR: any;
maxDOR: any;

//used to calculate and populate a proper date picker with retirement parameters for the user
newUserInputDORCalc(){
  let dobNum = parseInt(this.userDOB.substring(0,4), 10);
  let minDORYear = 62 + dobNum; 
  let maxDORYear = 70 + dobNum; 
  let minDORY = minDORYear.toString(); 
  let maxDORY = maxDORYear.toString();
  this.minDOR = minDORY + this.userDOB.slice(4,10);
  this.maxDOR = maxDORY + this.userDOB.slice(4,10);
}

  inputDORCalc(dob){
    let dobNum = parseInt(dob.substring(0,4), 10);
    let minDORYear = 62 + dobNum; 
    let maxDORYear = 70 + dobNum; 
    let minDORY = minDORYear.toString(); 
    let maxDORY = maxDORYear.toString();
    this.minDOR = minDORY + dob.slice(4,10);
    this.maxDOR = maxDORY + dob.slice(4,10);
    // this.minDOR = moment(dob).add(62, "y");
    // this.maxDOR = moment(dob).add(70, "y");
  }


  //on submit button click - input page
  getUserData(){

    //sessionStorage.setItem("userId")
    let userId = sessionStorage.getItem("userId");
    let token = sessionStorage.getItem("token");
    return this.http.get(this.baseURL + this.regURL + userId + "?access_token=" + token);
  }

  //Takes in assembled userData object from input page and returns a profile lb model object
  runRetireNowCalc(userData){
    console.log('send post:', userData)
    return this.http.post(this.baseURL + this.profileURL + "/retireNowCalc", userData)
  }

  //Posts the obtained user profile object and adds it to the related user
  postProfile(userObject){
    let userId = sessionStorage.getItem("userId");
    console.log("sending user profile post:", userObject);
    return this.http.post(this.baseURL + this.regURL + userId + "/profiles", userObject);
  }

  //Returns all of the respective user profiles related to the user
  getUserProfiles(){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.baseURL + this.regURL + userId + "/profiles/")
   }

  //Updates the profile of a user with edited data 
  updateUserProfile(){  
    let userId = sessionStorage.getItem("userId");
    let profileId = this.profileDataDB.id;
    return this.http.put(this.baseURL + this.regURL + userId + "/profiles/" + profileId, this.profileDataDB);
  }

  //deletes a user profile with userId to identify the user, and id to identify the profile
  deleteUserProfile(id){
     let userId = sessionStorage.getItem("userId");
    return this.http.delete(this.baseURL + this.regURL + userId + "/profiles/" + id);
   }
  
  //Takes in a user id and posts to the backend. Also clears sessions storage.
  onLogout(user){
    let token = sessionStorage.getItem("token");
    this.isLoggedIn = false; 
    console.log("onLogout", user); 
    sessionStorage.clear(); 
    return this.http.post(this.baseURL + this.regURL + this.logOutURL + "?access_token" + token, user)
  }

  //Returns a profile with userId to identify the user and profileId to identify the profile
  getProfileResults(){
    let userId = sessionStorage.getItem("userId");
    let profileId = sessionStorage.getItem("profileId");
    return this.http.get(this.baseURL + this.regURL + userId + "/profiles/" + profileId)
  }


}
