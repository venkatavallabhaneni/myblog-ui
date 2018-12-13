import { Route } from '@angular/router';
import { homeRoutes } from './components/home/home.router';
import { noPageRoutes } from './components/no-page/nopage.router';
import { myblogRouter } from './components/myblog/myblog.router';
import { profileRoutes } from './components/profile/profile.router';

export const routes: Route[] = [...homeRoutes, ...profileRoutes, ...myblogRouter, ...noPageRoutes];
