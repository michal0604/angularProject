import { Component, OnInit } from '@angular/core';
import {adminService} from 'src/app/services/admin-service.service';
import { Company } from 'src/app/models/company';
import { RemoveCompanyComponent } from '../remove-company/remove-company.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companies:Company[];
  public company:Company;
  router: any;
  getAllcompanies: any;
  constructor(private activatedRoute:ActivatedRoute,private adminservice:adminService) { }

   ngOnInit() {
    this.adminservice.getAllCompanies().subscribe(companies =>{
       this.companies = companies;
    },err =>{
      alert("Error:"+err.massage);
    
    });
  }


// removeCompany(id){
// console.log(id)
// } 



removeCompany(id){
  //const id = +this.activatedRoute.snapshot.params.companyId;
  const observable = this.adminservice.removeCompany(id);
  observable.subscribe(comp=>{
    this.company = comp;
  
    alert(JSON.stringify(this.removeCompany));
    this.router.navigate(["/company-list"]);
  },response =>{
  console.log(id);
 
  });

 
}
   
  
 //alert(JSON.stringify(this.company));
 

 


// removeCompany():void{
//   const id = +this.activatedRoute.snapshot.params.companyId;
//   const observable = this.adminservice.removeCompany(id);
//   observable.subscribe(comp=>{
//     this.company = comp;
  
//     alert(JSON.stringify(this.removeCompany));
//     this.router.navigate(["/home"]);
//   },response =>{
//   console.log(id);
 
//   });
//  //alert(JSON.stringify(this.company));
//  }


}
