import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyBlogResolverService } from './my-blog-resolver.service';
import { MyBlogRestService } from './myblog.service';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { HttpErrorInterceptor } from './shared/errors/app.http.error';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InterestsComponent } from './components/interests/interests.component';
import { AwardsComponent } from './components/awards/awards.component';
import { MyblogComponent } from './components/myblog/myblog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyProfileResolverService } from './components/profile/profile.resolver';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    HomeComponent,
    NoPageComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent,
    MyblogComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyBlogRestService, MyBlogResolverService, MyProfileResolverService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
