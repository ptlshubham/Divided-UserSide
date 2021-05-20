import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbaruserComponent } from './navbaruser.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbaruserComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbaruserComponent
  ]
})
export class NavbaruserModule { }
