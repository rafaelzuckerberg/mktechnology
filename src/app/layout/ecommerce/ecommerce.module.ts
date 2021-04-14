import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ListProductsEcommerceComponent } from './list-products-ecommerce/list-products-ecommerce.component';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KartOrdersComponent } from './kart-orders/kart-orders.component';
import { DeleteItemOrderComponent } from './kart-orders/delete-item-order/delete-item-order.component';


@NgModule({
  declarations: [
    ListProductsEcommerceComponent,
    KartOrdersComponent,
    DeleteItemOrderComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    // ReactiveFormsModule
  ],
  entryComponents: [
    DeleteItemOrderComponent
  ]
})
export class EcommerceModule { }
