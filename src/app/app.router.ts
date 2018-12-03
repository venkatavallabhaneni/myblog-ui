import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { homeRoutes } from './components/home/home.router';
import { aboutRoutes } from './components/about/about.router';
import { experienceRoutes } from './components/experience/experience.router';
import { noPageRoutes } from './components/no-page/nopage.router';
import { educationRoutes } from './components/education/education.router';

export const routes: Route[] = [...homeRoutes, ...aboutRoutes, ...experienceRoutes, ...educationRoutes, ...noPageRoutes];
