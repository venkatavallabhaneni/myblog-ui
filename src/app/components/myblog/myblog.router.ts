import { Route } from '@angular/router';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { MyblogComponent } from './myblog.component';
export const myblogRouter: Route[] = [
       {
              path: 'myblog', component: MyblogComponent,
              data: { 'category': 'myb' }, resolve: { myblog: MyBlogResolverService }
       }

];
