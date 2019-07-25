import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { adminService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent  {
  public coupon:Coupon=new Coupon();
  getCoupons:any;

  constructor(private companyService:CompanyServiceService,private router:Router) { }

  createCoupon():void{
    const observable =this.companyService.createCoupon(this.coupon);
    observable.subscribe(createCoupon=>{
      alert(JSON.stringify(this.createCoupon));
      this.router.navigate(["/home"]);
    },response =>{
    console.log(response);
   
    });
   alert(JSON.stringify(this.coupon));
   }
   
    
   
   }


