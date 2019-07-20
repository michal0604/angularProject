import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers:Customer[];

  constructor(private adminsService:adminService) { }

  ngOnInit() {
    this.adminsService.getAllCustomers().subscribe(customers =>{
      this.customers = customers;
   },err =>{
     alert("Error:"+err.massage)
    });
   
  
  }}


  

