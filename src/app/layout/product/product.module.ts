import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { CreateEditProductComponent } from './create-edit-product/create-edit-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListProductsComponent, 
    DeleteProductComponent, 
    CreateEditProductComponent, 
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateEditProductComponent,
    DeleteProductComponent
  ]
})
export class ProductModule { }
