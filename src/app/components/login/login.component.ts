
    

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Credentials } from 'src/app/models/credentials';
import { LoginService } from 'src/app/services/login.service';
import { LoginResult } from 'src/app/models/login-result';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  // constructor(private router:Router,private user:UserService) { }
  public credentials=new Credentials();
  public constructor(private loginService:LoginService,private router:Router){

}

public login():void{
  this.loginService.isExist(this.credentials).subscribe(loginResult=>{
    if(!loginResult.isLoggedIn){
      alert("Incorrect username or password");
    }
    else{
      this.loginService.isLoggedIn=true;
      this.loginService.type=loginResult.type;
    }
    if (loginResult.type==="customer"){
     this.router.navigate(["/customer"]);
     
   }
    if (loginResult.type==="company"){
    this.router.navigate(["/company"]);
  }
   if (loginResult.type==="admin"){
    this.router.navigate(["/admin"]);
  
  }
  
  });
}
 
  // public loginDemo():void{
  //   if (this.loginService.isExistDemo(this.credentials)){
  //     if (this.credentials.type==="customer"){
  //       this.router.navigate(["/customer"]);
  //     }
  //     else if (this.credentials.type==="company"){
  //       this.router.navigate(["/company"]);
  //     }
  //     else if (this.credentials.type==="admin"){
  //       this.router.navigate(["/admin"]);
  //     }

  //   }
  //   else{

    
  //   alert("Incorrect username or password");
  // }
  // }
  // loginUser(e) {
  //   e.preventDefault();
  // 	console.log(e);
  // 	var Username = e.target.elements[0].value;
  //   var Password = e.target.elements[1].value;
  //   var ClientType= e.target.elements[2].value;
  	
  // 	if(Username == 'admin' && Password == '1234' && ClientType=='ADMIN') {
  //     this.user.setUserLoggedIn();
  // 		this.router.navigate(['admin']);
  //   }
  //   else if (Username=='company'&& Password=='company'&& ClientType=='COMPANY'){
  //     this.user.setUserLoggedIn();
  // 		this.router.navigate(['company']);
  //   }
  //   else if(Username=='customer'&& Password=='customer'&& ClientType=='CUSTOMER'){
  //     this.user.setUserLoggedIn();
  // 		this.router.navigate(['customer']);
      
  //   }

}
      
  
  
 
  

 
    

  
 


   
    

    
  
      
   
      
    


  

   
 
        
        

   
 

