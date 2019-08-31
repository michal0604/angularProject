import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/login-result';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn:boolean;
  public type:string;

public constructor(private httpClient:HttpClient){

}
// public isExist(credentials:Credentials):Observable<LoginResult>{
// return this.httpClient.post<LoginResult>("http://localhost:8082/webCoupon1/login.html",credentials,{withCredentials:true});

// // return this.httpClient.get<LoginResult>("/assets/json/server-demo.json");
// }





  // public isExistDemo(credentials:Credentials):boolean{
  //   if (credentials.type==="customer" && credentials.name==="1" && credentials.pass==="1"){
  //     this.isLoggedIn=true;
  //     this.type=credentials.type;
  //     return true;
  //   }
  //   if (credentials.type==="company" && credentials.name==="2" && credentials.pass==="2"){
  //     this.isLoggedIn=true;
  //     this.type=credentials.type;
  //     return true;
  //   }
  //   if (credentials.type==="admin" && credentials.name==="3" && credentials.pass==="3"){
  //     this.isLoggedIn=true;
  //     this.type=credentials.type;
  //     return true;
  //   }
  //   return false;
    
  // }

  public isExist(credentials: Credentials): Observable<LoginResult> {//public isExistDemo//boolean

    if(credentials.type === "admin" && credentials.username === "admin" && credentials.password === "1234") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      return this.httpClient.post<LoginResult>("http://localhost:8082/webCoupon1/login?name=admin&pass=1234&type=admin",credentials,{withCredentials:true})
    }

    if(credentials.type === "company" && credentials.username === "company" && credentials.password === "company") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      return this.httpClient.post<LoginResult>("http://localhost:8082/webCoupon1/login?compName=company&password=company&type=company",credentials,{withCredentials:true})
    }

    if(credentials.type === "customer" && credentials.username === "customer" && credentials.password === "customer") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      return this.httpClient.post<LoginResult>("http://localhost:8082/webCoupon1/login?customerName=customer&password=customer&type=customer",credentials,{withCredentials:true})
    }
    alert("Wrong coordinates! Try again ");//return false;

  }
  public logout():void{
this.type="";
this.isLoggedIn=false;

  }
}
