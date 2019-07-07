// import { Component, OnInit, ViewChild } from '@angular/core';

// import { RouterLink, Router, ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
 
 

//   constructor(private router:Router,private route:ActivatedRoute) { }

//   ngOnInit() {
//   }
//   onSubmit(){
// var Name:string;
// var Password:string;
// var ClientType:string;

//     if (Name=='admin'&&Password=='1234'&& ClientType=='Admin'){
//       this.router.navigate(['/company']);
//     }else
//     alert("the password or user not correct")
//     }
    

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
    e.preventDefault();
  	console.log(e);
  	var Username = e.target.elements[0].value;
    var Password = e.target.elements[1].value;
    var ClientType= e.target.elements[2].value;
  	
  	if(Username == 'admin' && Password == '1234' && ClientType=='ADMIN') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['admin']);
    }
    else if (Username=='company'&& Password=='company'&& ClientType=='COMPANY'){
      this.user.setUserLoggedIn();
  		this.router.navigate(['company']);
    }
    else if(Username=='customer'&& Password=='customer'&& ClientType=='CUSTOMER'){
      this.user.setUserLoggedIn();
  		this.router.navigate(['customer']);
      
    }
  }
  }


 
    

  
 


   
    

    
  
      
   
      
    


  

   
 
        
        

   
 

