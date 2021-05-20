import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { ProductRoutes } from './product.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbaruserModule } from '../shared/navbaruser/navbaruser.module';
import { FooterUserModule } from '../shared/footer/footer.module';
import { DetailsComponent } from './details/details.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { WishComponent } from './wish/wish.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';



@NgModule({
  declarations: [
    ListComponent,
    CartComponent,
    DetailsComponent,
    WishComponent,
    CompareComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NavbaruserModule,
    FooterUserModule,
    NgbModule,
    IvyCarouselModule,
    NgxStarRatingModule,
    BrowserAnimationsModule,
    BrowserModule,
    GalleryModule,
    LightboxModule,
    ImageViewerModule,

    RouterModule.forChild(ProductRoutes),
  ]
})
export class ProductModule { }
