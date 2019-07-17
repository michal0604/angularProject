import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

import{HttpClientModule}from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserService } from './user.service'
import { AuthguardGuard } from './authguard.guard';

import { CustomerListComponent } from './components/admin/customer-list/customer-list.component';
import { adminService } from './services/admin-service.service';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { CreateCompanyComponent } from './components/admin/create-company/create-company.component';
import { CreateCustomerComponent } from './components/admin/create-customer/create-customer.component';






const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [AuthguardGuard],
    component: AdminComponent
  }
 
  

]


@NgModule({
  declarations: [
   
    LayoutComponent,
   
    HeaderComponent,
   
    FooterComponent,
   
    MenuComponent,
   
    HomeComponent,
   
    ProductsComponent,
   
    LoginComponent,
   
    AdminComponent,
   
    CompanyComponent,
   
    CustomerComponent,

    
    CustomerListComponent,
    UpdateCompanyComponent,
    CompanyListComponent,
    UpdateCustomerComponent,
    CreateCompanyComponent,
    CreateCustomerComponent
   
   
 
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService, AuthguardGuard,adminService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
