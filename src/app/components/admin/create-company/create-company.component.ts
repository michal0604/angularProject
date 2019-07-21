import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service.service';
import { Company } from 'src/app/models/company';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  public company:Company=new Company();
  getAllCompanies: any;
 
  
  constructor(private adminService:adminService,private router:Router) { }

  
  // createCompany(){
  //   console.log('create company')
  //   this.adminService.createCompany(this.company).subscribe((res) => 
  //   {
  //     this.company=this.company;
  //     console.log('check')

  //   }
    
  createCompany():void{
   const observable =this.adminService.createCompany(this.company);
   observable.subscribe(createCompany=>{
     //alert(JSON.stringify(this.createCompany));
     this.router.navigate(["/home"]);
   },response =>{
   console.log(response);
  
   });
  //alert(JSON.stringify(this.company));
  }
  
   
  
  }
 
  


  

 