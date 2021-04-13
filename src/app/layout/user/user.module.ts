import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './customer/list-customers/list-customers.component';
import { CreateEditCustomerComponent } from './customer/create-edit-customer/create-edit-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { UserRoutingModule } from './user-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatModule } from 'src/app/shared/modules/stat/stat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCustomersComponent, 
    CreateEditCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    // FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateEditCustomerComponent,
    DeleteCustomerComponent
  ]
})
export class UserModule { }
