import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { adminService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent  {
  public customer:Customer=new Customer();

  constructor(private adminService:adminService,private router:Router) { }

  createCustomer():void{
    const observable =this.adminService.createCustomer(this.customer);
    observable.subscribe(createCustomer=>{
      alert(JSON.stringify(this.createCustomer));
      this.router.navigate(["/home"]);
    },response =>{
    console.log(response);
   
    });
   alert(JSON.stringify(this.customer));
   }
  }