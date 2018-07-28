import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  // data={};

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  //api loopback calls below
  
  //base URL to call loopback api
  baseURL:string='https://retire-now-backend-lauren.herokuapp.com/api';
  //loopback add on to register a user
  regURL:string='/appUsers';
  //loopback add on to login in a already registered user
  logURL:string='/login';

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



}
