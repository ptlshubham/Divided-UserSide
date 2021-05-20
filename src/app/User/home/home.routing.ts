import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {

    path: '',
    children: [ {
      path: 'home',
      component: HomeComponent
  }]
}];
