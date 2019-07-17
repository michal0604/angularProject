    
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;
  

  constructor(private http:HttpClient) { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
  	this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    this.http.get<any>("http://localhost:8082/webCoupon1/login?name=admin&pass=1234&type=admin");
  	return this.isUserLoggedIn;
  }
  // public getUserLoggedIn():Observable<any>{
  //   return this.http.get<any>("http://localhost:8082/webCoupon1/login?name=admin&pass=1234&type=admin");
      
  }
  


