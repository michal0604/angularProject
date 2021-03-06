import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { adminService } from 'src/app/services/admin-service.service';
import { Company } from 'src/app/models/company';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public company:Company;
//  public icompany : ICompany;

  constructor(private user: UserService,private adminService:adminService) { }
  

  ngOnInit() {

    this.initForm();
  // this.createCompany();

  }

  initForm(){
    this.company = {
      companyId:null,
      compName : null,
      password : null,
      email : null
    }
  }

  
    
  }


