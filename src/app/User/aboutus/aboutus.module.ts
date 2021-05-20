import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { RouterModule } from '@angular/router';
import { NavbaruserModule } from '../shared/navbaruser/navbaruser.module';
import { FooterUserModule } from '../shared/footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusRoutes } from './aboutus.routing';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    NavbaruserModule,
    FooterUserModule,
    NgbModule,
    RouterModule.forChild(AboutusRoutes)
  ]
})
export class AboutusModule { }
