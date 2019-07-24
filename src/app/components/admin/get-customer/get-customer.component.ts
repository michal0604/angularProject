import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
//import { Customer } from 'src/app/models/customer';
import { adminService } from 'src/app/services/admin-service.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {
  
  public customer:Customer;
  public company:Company;
  constructor(private activatedRoute:ActivatedRoute,private adminservice:adminService) { }

public ngOnInit():void{
const id = +this.activatedRoute.snapshot.params.customerId;
//const id = 3;
const observable = this.adminservice.getCustomer(id);
observable.subscribe(cust=>{
this.customer = cust ;
});
}







// updateCompany(id){
//   const observable =this.adminservice.updateCompany(id);
//   observable.subscribe(comp=>{
//     this.company = comp;
//     alert(JSON.stringify(this.updateCompany));
//   //this.router.navigate(["/company-list"]);
// },response =>{
// console.log(id);

// });


// }

}



   


  
    
  
 


