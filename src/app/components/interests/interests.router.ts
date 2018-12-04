import { Route } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { InterestsComponent } from './interests.component';
export const interestsRouter: Route[] = [
       {
              path: 'interests', component: InterestsComponent,
              data: { 'category': 'int' }, resolve: { interests: MyBlogResolverService }
       }

];
