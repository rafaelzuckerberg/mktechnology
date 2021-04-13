import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsEcommerceComponent } from './list-products-ecommerce/list-products-ecommerce.component';


const routes: Routes = [
  {
    path: 'products',
    component: ListProductsEcommerceComponent,        
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
