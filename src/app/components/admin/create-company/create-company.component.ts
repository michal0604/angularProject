import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  public company:Company;

  constructor(private adminService:adminService) { }

  ngOnInit() {
    
  }
  createCompany(){
    this.adminService.createCompany(this.company).subscribe((param) => 
    {
      console.log('check')

    }
    )
  }

}
  
  
 