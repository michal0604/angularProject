import { Component, OnInit } from '@angular/core';
import {adminService} from 'src/app/services/admin-service.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public company:Company[];
  adminService: any;
  

  constructor(private adminsService:adminService) { }

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(allCompanies =>this.company =allCompanies);
    
    
  }

}
