import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';


export const ContactusRoutes: Routes = [{

    path: '',
    children: [ {
      path: 'contactus',
      component: ContactusComponent
  }]
}];
