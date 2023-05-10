import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './body/nav/nav.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavComponent,
    ProductsListComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
