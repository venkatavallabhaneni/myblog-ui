import { Route } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
export const experienceRoutes: Route[] = [
       {
              path: 'experience', component: ExperienceComponent,
              data: { 'category': 'exp' }, resolve: { experience: MyBlogResolverService }
       }

];
