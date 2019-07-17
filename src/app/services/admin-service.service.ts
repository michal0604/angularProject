import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})


export class adminService {
//DI=DEPENDENCY INJECTION
  constructor(private http:HttpClient) { }
  

  private handleError(error: Response) {
    return Observable.throw(error);
  }

   createCompany(company: Company):Observable<any>{
    return this.http.post("http://localhost:8082/webCoupon1/rest/admin/createCompany",company)
   }   
   
   public getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>("http://localhost:8082/webCoupon1/rest/admin/getAllCompanies")
    // .map((res) => res.json());
     
      
  }
  
 
   
}
