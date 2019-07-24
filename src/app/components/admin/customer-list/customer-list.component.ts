import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service.service';
import { Customer } from 'src/app/models/customer';
import { Company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers:Customer[];
  public customer:Customer;
  router:any;
  getAllcustomers:any;

  constructor(private activatedRoute:ActivatedRoute ,private adminsService:adminService) { }

  ngOnInit() {
    this.adminsService.getAllCustomers().subscribe(customers =>{
      this.customers = customers;
   },err =>{
     alert("Error:"+err.massage)
    });
   
  
  }

  removeCustomer(id){
    //const id = +this.activatedRoute.snapshot.params.companyId;
    const observable = this.adminsService.removeCustomer(id);
    observable.subscribe(cust=>{
      this.customer = cust;
    
      alert(JSON.stringify(this.removeCustomer));
      this.router.navigate(["/home"]);
    },response =>{
    console.log(id);
   
    });
  

  }
  
  }
