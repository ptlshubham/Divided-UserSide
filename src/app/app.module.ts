import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HomeModule } from './User/home/home.module';
import { ProductModule } from './User/product/product.module';
import { FooterUserModule } from './User/shared/footer/footer.module';
import { NavbaruserModule } from './User/shared/navbaruser/navbaruser.module';
import { ContactusModule } from './User/contactus/contactus.module';
import { AboutusModule } from './User/aboutus/aboutus.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RegisteruserModule } from './User/registeruser/registeruser.module';
import { AuthInterceptor } from './auth/auth-http-interceptor';
import { AuthService } from './User/services/auth.service';
import { AuthGuard } from './auth.guard';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { GalleryModule } from 'ng-gallery';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { LightboxModule } from 'ng-gallery/lightbox';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

export function tokenGetter() {
  return localStorage.getItem('access_token');
};
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    NgbModule,
    HttpModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    FooterUserModule,
    NavbaruserModule,
    ContactusModule,
    AboutusModule,
    IvyCarouselModule,
    NgxStarRatingModule,
    BrowserModule,
    RegisteruserModule,
    NgImageSliderModule,
    NgMultiSelectDropDownModule.forRoot(),
    GalleryModule,
    LightboxModule,
    ImageViewerModule,
   
    NotifierModule.withConfig(customNotifierOptions)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [
    
  ]

})
export class AppModule { }
