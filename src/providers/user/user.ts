import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environments.dev';


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
  regURL:string='appUsers';
  //loopback add on to login in a already registered user
  logURL:string='/login';
  //loopback add on to access profile model
  profileURL:string='/profile';

  //register call to create an account
  onReg(user){
    return this.http.post(this.baseURL + this.regURL, user)
  };

  //login call after a user has registered 
  onLog(login){
    return this.http.post(this.baseURL + this.regURL + this.logURL, login)
  };

  //reset password

  //logout user

  //on submit button click - input page
  getUserData(){

    //sessionStorage.setItem("userId")
    let userId = sessionStorage.getItem("userId");
    let token = sessionStorage.getitem("token");
    console.log("tokens",userId,token);
    console.log(this.baseURL + this.regURL + token + "/" + userId);
    return this.http.get(this.baseURL + this.regURL + token + "/" + userId);
  }

  //Takes in assembled userData object from input page and returns a profile lb model object
  runRetireNowCalc(userData){
    return this.http.post(this.baseURL + this.profileURL + "/retireNowCalc", userData)
  }



}
