import { Route } from '@angular/router';
import { NoPageComponent } from './no-page.component';
export const noPageRoutes: Route[] = [
       {
              path: '**', component: NoPageComponent
       }

];
