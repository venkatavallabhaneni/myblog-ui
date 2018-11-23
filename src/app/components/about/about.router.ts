import { Route } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
export const aboutRoutes: Route[] = [    {
        path: 'about', component: AboutComponent, data: { 'category': 'abou' },
        resolve: { about: MyBlogResolverService }
    }
];

