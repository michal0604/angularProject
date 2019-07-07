import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuthguardGuard } from './authguard.guard';





const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path: "products", component:ProductsComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",
  canActivate: [AuthguardGuard],
  component:AdminComponent},
  {path:"company",component:CompanyComponent},
  {path:"customer",component:CustomerComponent}
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
