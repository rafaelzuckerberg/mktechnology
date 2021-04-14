import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KartOrdersComponent } from './kart-orders/kart-orders.component';
import { ListProductsEcommerceComponent } from './list-products-ecommerce/list-products-ecommerce.component';


const routes: Routes = [
  {
    path: 'products',
    component: ListProductsEcommerceComponent,        
  },
  {
    path: 'kart',
    component: KartOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
