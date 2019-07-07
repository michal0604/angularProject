import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//DI=DEPENDENCY INJECTION
  constructor(private http:HttpClient) { }

  public getAllProducts():Observable<Product[]>{
return this.http.get<Product[]>("/assets/json/products.json");
  }
}
