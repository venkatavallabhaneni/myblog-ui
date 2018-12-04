import { Route } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { AwardsComponent } from './awards.component';
export const awardsRouter: Route[] = [
       {
              path: 'awards', component: AwardsComponent,
              data: { 'category': 'awa' }, resolve: { awards: MyBlogResolverService }
       }

];
