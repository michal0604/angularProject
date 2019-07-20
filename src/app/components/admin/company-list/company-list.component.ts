import { Component, OnInit } from '@angular/core';
import {adminService} from 'src/app/services/admin-service.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companies:Company[];
  
  constructor(private adminsService:adminService) { }

   ngOnInit() {
    this.adminsService.getAllCompanies().subscribe(companies =>{
       this.companies = companies;
    },err =>{
      alert("Error:"+err.massage);
    
    });
   
  
  }}
