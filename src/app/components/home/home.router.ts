import { Route } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { AboutComponent } from '../about/about.component';
export const homeRoutes: Route[] = [
       {
              path: '', component: AboutComponent,
              data: { 'category': 'abou' }, resolve: { about: MyBlogResolverService }
       }

];
