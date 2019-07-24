import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { adminService } from 'src/app/services/admin-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {
  
  public company:Company;

  constructor(private activatedRoute:ActivatedRoute,private adminservice:adminService) { }


  
public ngOnInit():void{
const id = +this.activatedRoute.snapshot.params.companyId;

const observable = this.adminservice.getCompany(id);
observable.subscribe(comp=>{
this.company = comp;
});
}

updateCompany():void{
  const observable =this.adminservice.updateCompany(this.company);
  observable.subscribe(updateCompany=>{
    //alert(JSON.stringify(this.updateCompany));
    //this.router.navigate(["/home"]);
  },response =>{
  console.log(response);
  
 
  });
 //alert(JSON.stringify(this.company));
 }

// updateCompany():void{
//   //console.log(this.company);
//   const id = +this.activatedRoute.snapshot.params.customerId;
//   //console.log(this.company);
//   const observable = this.adminservice.updateCompany(this.company);
//   //console.log(this.company);
//   observable.subscribe(cust=>{
//     this.company = cust ;
//     //console.log(this.company);
//     });
//   }
}