import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';

import { FrontComponent } from '../manage/Admin/layouts/front/front.component';


import { SidebarModule } from '../manage/Admin/sidebar/sidebar.module';
import { FixedPluginModule } from '../manage/Admin/shared/fixedplugin/fixedplugin.module';
import { FooterModule } from '../manage/Admin/shared/footer/footer.module';
import { NavbarModule } from '../manage/Admin/shared/navbar/navbar.module';
import { AdminLayoutComponent } from '../manage/Admin/layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from '../manage/Admin/layouts/auth/auth-layout.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    declarations: [
        FrontComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
    ],
    imports: [
        CommonModule,
        ManageRoutingModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        ColorPickerModule,
    ]
})
export class ManageModule { }
