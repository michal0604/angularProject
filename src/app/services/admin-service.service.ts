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

  // public getAllCompanies():Observable<Company[]>{
  //   return this.http.get<Company[]>("http://localhost:8080/webCoupon1/rest/admin/getAllCompanies",Company)
  }


