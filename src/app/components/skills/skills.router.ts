import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from './skills.component';
export const skillsRoutes: Route[] = [
       {
              path: '', component: SkillsComponent,
              data: { 'category': 'ski' }, resolve: { skills: MyBlogResolverService }
       }

];
