import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './list-orders/list-orders.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListOrdersComponent,        
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
