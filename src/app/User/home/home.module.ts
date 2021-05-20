import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { FooterUserModule } from '../shared/footer/footer.module';
import { NavbaruserModule } from '../shared/navbaruser/navbaruser.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserHomeService } from './home.services';
import { NgImageSliderModule } from 'ng-image-slider';





@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(HomeRoutes),
      FormsModule,
      NavbaruserModule,
      FooterUserModule,
      NgbModule,
      NgImageSliderModule,

      // AgmCoreModule.forRoot({
      //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
      // })
  ],
  declarations: [HomeComponent],
  exports:[
    UserHomeService
  ]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomeModule {}
