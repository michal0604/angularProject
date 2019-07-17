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
  {path:"create-customer",component:CreateCustomerComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
