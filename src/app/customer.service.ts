import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Coupon } from './models/coupon';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  public coupon:Coupon = new Coupon();

  constructor(private http:HttpClient) { }

  public getAllPurchasedCoupon():Observable<Coupon[]>{
    return this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/customer/getAllPurchasedCoupons",{withCredentials:true});
    
     }

     public getAllPurchasedCouponsByPrice(price: number){
      return this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/customer/getAllPurchasedCouponsByPrice/"+price);
      
       }
       public getAllPurchasedCouponByType(couponType: couponType){
        return this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/customer/getAllPurchasedCouponsByType/"+couponType);
        
         }
         public PurchaseCoupon(couponId: number){
          return this.http.get<Coupon>("http://localhost:8082/webCoupon1/rest/customer/purchaseCoupon/"+couponId);
          
         }

           
}
