import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './Admin/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './Admin/layouts/auth/auth-layout.component';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [

    {
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    },

    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './Admin/dashboard/dashboard.module#DashboardModule',
                canActivate: [AuthGuard]
            },
   
            {
                path: '',
                loadChildren: './Admin/category/category.module#CategoryModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: './Admin/emi/emi.module#EmiModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'orders',
                loadChildren: './Admin/orders/orders.module#OrdersModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'customers',
                loadChildren: './Admin/customers/customers.module#CustomersModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: './Admin/reviews/reviews.module#ReviewsModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: './Admin/inventory/inventory.module#InventoryModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: './Admin/vendors/vendors.module#VendorsModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'banners',
                loadChildren: './Admin/banners/banners.module#BannersModule',
                canActivate: [AuthGuard]
            },


        ]
    },

    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: './Admin/pages/pages.module#PagesModule'
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRoutingModule { }
