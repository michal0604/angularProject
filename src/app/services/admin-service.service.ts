import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Customer } from '../models/customer';
import { Coupon } from '../models/coupon';
import { GetCustomerComponent } from '../components/admin/get-customer/get-customer.component';



@Injectable({
  providedIn: 'root'
})


export class adminService {
//DI=DEPENDENCY INJECTION
  constructor(private http:HttpClient) { }
  

  private handleError(error: Response) {
    return Observable.throw(error);
  }

   createCompany(company: Company):Observable<Company>{
    return this.http.post<Company>("http://localhost:8082/webCoupon1/rest/admin/createCompany",company,{withCredentials:true});
   }   
   
   public getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>("http://localhost:8082/webCoupon1/rest/admin/getAllCompanies",{withCredentials:true});
    // .map((res) => res.json());

     }
     public getAllCustomers():Observable<Customer[]>{
      return this.http.get<Customer[]>("http://localhost:8082/webCoupon1/rest/admin/getAllCustomers",{withCredentials:true});
      // .map((res) => res.json());
  
       }
       createCustomer(customer: Customer):Observable<Customer>{
        return this.http.post<Customer>("http://localhost:8082/webCoupon1/rest/admin/createCustomer",customer,{withCredentials:true});
       }  
  
       createCoupon(coupon: Coupon):Observable<Coupon>{
        return this.http.post<Coupon>("http://localhost:8082/webCoupon1/rest/company/createCoupon",coupon,{withCredentials:true});
    }
 
    public getCoupons():Observable<Coupon[]>{
      return this.http.get<Coupon[]>("http://localhost:8082/webCoupon1/rest/company/getCoupons",{withCredentials:true});
      // .map((res) => res.json());
  
       }
       getCompany(companyId:number):Observable<Company>{
        return this.http.get<Company>("http://localhost:8082/webCoupon1/rest/admin/getCompany/"+ companyId );
       }

       removeCompany(companyId: number):Observable<Company>{
        return this.http.delete<Company>("http://localhost:8082/webCoupon1/rest/admin/removeCompany/"+companyId);
       }
       
       getCustomer(customerId: number):Observable<Customer>{
        return this.http.get<Customer>("http://localhost:8082/webCoupon1/rest/admin/getCustomer/"+ customerId );
       }

       updateCompany(company: Company):Observable<Company> {
        
        return this.http.post<Company>("http://localhost:8082/webCoupon1/rest/admin/updateCompany/", company,{withCredentials:true});
         
      }
      removeCustomer(customerId: number):Observable<Customer>{
        return this.http.delete<Customer>("http://localhost:8082/webCoupon1/rest/admin/removeCustomer/"+customerId);
       }
      }
    

 

