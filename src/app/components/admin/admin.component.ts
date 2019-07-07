import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { adminService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminService: any;
  company: any;

  constructor(private user: UserService,private admintsService:adminService) { }
  

  ngOnInit() {
    this.adminService.getAllCompanies().subscribe(allCompanies =>this.company =allCompanies);
  }

}
