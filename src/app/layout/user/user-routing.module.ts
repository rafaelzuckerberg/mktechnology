import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../layout.component';
import { ListCustomersComponent } from './customer/list-customers/list-customers.component';


const routes: Routes = [
    {
        path: 'customers',
        component: ListCustomersComponent,        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
