import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-get-coupons',
  templateUrl: './get-coupons.component.html',
  styleUrls: ['./get-coupons.component.css']
})
export class GetCouponsComponent implements OnInit {
  public coupons:Coupon[];

  constructor(private adminsService:adminService) { }

  ngOnInit() {
    this.adminsService.getCoupons().subscribe(coupons =>{
      this.coupons = coupons
   },err =>{
     alert("Error:"+err.massage)
    });
   
  
  }}
  
