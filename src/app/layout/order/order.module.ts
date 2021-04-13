import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListOrdersComponent, DeleteOrderComponent, DetailsOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule
  ],
  entryComponents: [
    DeleteOrderComponent
  ]
})
export class OrderModule { }
