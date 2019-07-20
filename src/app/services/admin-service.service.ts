import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Customer } from '../models/customer';



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
  
    }
 
   

