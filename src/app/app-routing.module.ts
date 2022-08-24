import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ProductDetailComponent },
];

@NgModule({
 declarations: [],
 imports: [
   CommonModule,
   RouterModule.forRoot(routes)
 ],
 exports:[RouterModule]
})
export class AppRoutingModule { }
