import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ListProductsEcommerceComponent } from './list-products-ecommerce/list-products-ecommerce.component';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListProductsEcommerceComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    // ReactiveFormsModule
  ]
})
export class EcommerceModule { }
