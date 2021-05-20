import { Routes } from '@angular/router';
import { ListComponent } from './list.component';


export const ProductListRoutes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: ListComponent
    }]
}];
