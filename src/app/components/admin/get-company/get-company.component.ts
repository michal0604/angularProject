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
}



   


  
    
  
 


