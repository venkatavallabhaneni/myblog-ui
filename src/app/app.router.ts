import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { homeRoutes } from './components/home/home.router';
import { aboutRoutes } from './components/about/about.router';
import { experienceRoutes } from './components/experience/experience.router';
import { noPageRoutes } from './components/no-page/nopage.router';
import { educationRoutes } from './components/education/education.router';
import { skillsRoutes } from './components/skills/skills.router';
import { awardsRouter } from './components/awards/awards.router';
import { interestsRouter } from './components/interests/interests.router';
import { myblogRouter } from './components/myblog/myblog.router';

export const routes: Route[] = [...homeRoutes, ...aboutRoutes,
...experienceRoutes, ...educationRoutes,  ...skillsRoutes, ...interestsRouter,  ...awardsRouter, ...myblogRouter,  ...noPageRoutes];
