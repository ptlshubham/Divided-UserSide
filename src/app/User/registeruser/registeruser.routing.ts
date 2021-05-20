import { Routes } from '@angular/router';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { RegisteruserComponent } from './registeruser.component';


export const RegisteruserRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'userregister',
            component: RegisteruserComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'userlogin',
            component: LoginuserComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'manageuser',
            component: ManageuserComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'mobileview',
            component: ManageuserComponent
        }]
    },
];
