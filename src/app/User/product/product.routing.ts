import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { WishComponent } from './wish/wish.component';



export const ProductRoutes: Routes = [{
    path: '',
    children: [{
        path: 'product/productlist',
        component: ListComponent
    }, {
        path: 'usercart',
        component: CartComponent
    }, {
        path: 'product/productdetails',
        component: DetailsComponent
    },
    {
        path: 'wishlist',
        component: WishComponent
    },
    {
        path: 'compare',
        component: CompareComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    }
    ]
}];
