import { Route } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
export const educationRoutes: Route[] = [
       {
              path: 'education', component: EducationComponent,
              data: { 'category': 'edu' }, resolve: { education: MyBlogResolverService }
       }

];
