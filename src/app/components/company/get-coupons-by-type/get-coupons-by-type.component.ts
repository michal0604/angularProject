import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-get-coupons-by-type',
  templateUrl: './get-coupons-by-type.component.html',
  styleUrls: ['./get-coupons-by-type.component.css']
})
export class GetCouponsByTypeComponent implements OnInit {
  companyService: any;
  typeToSort: CouponType = null;
  coupons: Coupon[] = [];
  coupon: Coupon = new Coupon();
  company: Company;

  constructor() { }

  ngOnInit() {
  }

  getCouponsByType() {
   
    this.companyService.getCouponsByType(this.typeToSort).subscribe(
      (coupons) => {
        this.coupons = [];
        for (let coupon of coupons) {
          coupon = new Coupon(coupon);
          this.coupons.push(coupon);
        }
      },
      (error) => { console.error('something went wrong...') }
    );
  }

}
