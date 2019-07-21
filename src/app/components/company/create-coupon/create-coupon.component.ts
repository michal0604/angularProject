import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { adminService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent  {
  public coupon:Coupon=new Coupon();

  constructor(private adminService:adminService,private router:Router) { }

  createCoupon():void{
    const observable =this.adminService.createCoupon(this.coupon);
    observable.subscribe(createCoupon=>{
      alert(JSON.stringify(this.createCoupon));
      this.router.navigate(["/home"]);
    },response =>{
    console.log(response);
   
    });
   alert(JSON.stringify(this.coupon));
   }
   
    
   
   }


