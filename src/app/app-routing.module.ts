import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuthguardGuard } from './authguard.guard';

import { CustomerListComponent } from './components/admin/customer-list/customer-list.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { CreateCompanyComponent } from './components/admin/create-company/create-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { CreateCustomerComponent } from './components/admin/create-customer/create-customer.component';
import { GetCompanyComponent } from './components/admin/get-company/get-company.component';
import { GetCustomerComponent } from './components/admin/get-customer/get-customer.component';
import { RemoveCompanyComponent } from './components/admin/remove-company/remove-company.component';
import { RemoveCustomerComponent } from './components/admin/remove-customer/remove-customer.component';
import { CreateCouponComponent } from './components/company/create-coupon/create-coupon.component';
import { GetCouponsComponent } from './components/company/get-coupons/get-coupons.component';
import { GetCouponsByDateComponent } from './components/company/get-coupons-by-date/get-coupons-by-date.component';
import { GetCouponsByPriceComponent } from './components/company/get-coupons-by-price/get-coupons-by-price.component';
import { GetCouponsByTypeComponent } from './components/company/get-coupons-by-type/get-coupons-by-type.component';
import { RemoveCouponComponent } from './components/company/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';







const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "products", component:ProductsComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",
  canActivate: [AuthguardGuard],
  component:AdminComponent},
  {path:"company",component:CompanyComponent},
  {path:"customer",component:CustomerComponent},
  {path:"companyList",component:CompanyListComponent},
  {path:"customerList",component:CustomerListComponent},
  {path:"update-customer",component:UpdateCustomerComponent},
  {path:"create-company",component:CreateCompanyComponent},
  {path:"update-company",component:UpdateCompanyComponent},
  {path:"create-customer",component:CreateCustomerComponent},
  {path:"get-company",component:GetCompanyComponent},
  {path:"get-customer",component:GetCustomerComponent},
  {path:"remove-company",component:RemoveCompanyComponent},
  {path:"remove-customer",component:RemoveCustomerComponent},
  {path:"create-coupon",component:CreateCouponComponent},
  {path:"get-coupons",component:GetCouponsComponent},
  {path:"get-coupons-by-date",component:GetCouponsByDateComponent},
  {path:"get-coupons-by-price",component:GetCouponsByPriceComponent},
  {path:"get-coupons-by-type",component:GetCouponsByTypeComponent},
  {path:"get-my-company",component:RemoveCustomerComponent},
  {path:"remove-coupon",component:RemoveCouponComponent},
  {path:"update-coupon",component:UpdateCouponComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
