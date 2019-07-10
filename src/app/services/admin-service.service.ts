import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class adminService {
//DI=DEPENDENCY INJECTION
  constructor(private http:HttpClient) { }

   createCompany(company: ICompany):Observable<any>{
    return this.http.post("http://localhost:8082/webCoupon1/restm/admin/createCompany?name=PIZZAHUT&pass=1111&email=pizza@pizzaHut.com",company)
   }      
    
    
  }
 
   
   
