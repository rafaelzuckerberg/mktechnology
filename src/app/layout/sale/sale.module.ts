import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { ListSalesComponent } from './list-sales/list-sales.component';
import { DetailsSaleComponent } from './details-sale/details-sale.component';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ListSalesComponent, DetailsSaleComponent],
  imports: [
    CommonModule,
    SaleRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
  ],
  entryComponents: [
    DetailsSaleComponent
  ]
})
export class SaleModule { }
