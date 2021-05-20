import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisteruserComponent } from './registeruser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { NavbaruserModule } from '../shared/navbaruser/navbaruser.module';
import { FooterUserModule } from '../shared/footer/footer.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisteruserRoutes } from './registeruser.routing';
import { ManageuserComponent } from './manageuser/manageuser.component';



@NgModule({
  declarations: [RegisteruserComponent, LoginuserComponent, ManageuserComponent],
  imports: [
    CommonModule,
    NavbaruserModule,
    FooterUserModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild(RegisteruserRoutes)
  ]

})
export class RegisteruserModule { }
