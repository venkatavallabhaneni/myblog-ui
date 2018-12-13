import { Route } from '@angular/router';
import { MyProfileResolverService } from './profile.resolver';
import { ProfileComponent } from './profile.component';
export const profileRoutes: Route[] = [{
    path: 'profile', component: ProfileComponent, data: { 'categories': 'about,experince,education,skills,interests,awards' },
    resolve: { profile: MyProfileResolverService }
}
];

