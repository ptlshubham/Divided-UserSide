import { Routes } from '@angular/router';



import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },

    {
        path: 'home ',
        loadChildren: './User/home/home.module#HomeModule'
    },
    {
        path: 'product',
        loadChildren: './User/product/product.module#ProductModule'
    },
    {
        path: '',
        loadChildren: './User/aboutus/aboutus.module#AboutusModule'
    },
    {
        path: '',
        loadChildren: './User/contactus/contactus.module#ContactusModule'
    },
    // {
    //     path: '',
    //     loadChildren: './User/shared/mobileapp/mobileapp.module#MobileappModule'
    // },
    {
        path: 'user',
        loadChildren: './User/registeruser/registeruser.module#RegisteruserModule'
    },
    {
        path : 'manage',
        loadChildren: './manage/manage.module#ManageModule'
    }
]
// {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [{
//         path: 'pages',
//         loadChildren: './Admin/pages/pages.module#PagesModule'
//     }]
// },
