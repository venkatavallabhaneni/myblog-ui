import { Route } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { MyProfileResolverService } from '../profile/profile.resolver';
export const homeRoutes: Route[] = [
       {
              path: '', component: ProfileComponent, data: { 'categories': 'about,experience,education,skills,interests,awards' },
              resolve: { profile: MyProfileResolverService }
       }

];
