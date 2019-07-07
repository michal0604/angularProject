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
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
