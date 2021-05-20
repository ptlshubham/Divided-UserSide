import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';


export const AboutusRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'aboutus',
      component: AboutusComponent
  }]
}];
