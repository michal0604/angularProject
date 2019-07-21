import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { adminService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  loadingCompanies = true;
  companies: Company[] = [];
  company = new Company();
  updateCompanyForm: FormGroup;
  getAllcompanies: any;

  constructor(private router: Router, private route: ActivatedRoute,private adminService:adminService) { }

  ngOnInit() {
    
    this.updateCompanyForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
  }
  setCompany(company: Company) {
    this.company = company;
  }
  updateCompany() {
    this.adminService.updateCompany(this.company).subscribe(
      (res) => {
        this.getAllcompanies();
      },
     
    );
  }


  }


