import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus.component';
import { RouterModule } from '@angular/router';
import { NavbaruserModule } from '../shared/navbaruser/navbaruser.module';
import { FooterUserModule } from '../shared/footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusRoutes } from './contactus.routing';



@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    NavbaruserModule,
    FooterUserModule,
    NgbModule,
    RouterModule.forChild(ContactusRoutes)
  ]
})
export class ContactusModule { }
