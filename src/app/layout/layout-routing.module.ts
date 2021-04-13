import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Screen2Component } from './screen2/screen2.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./user/user.module').then(m => m.UserModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
