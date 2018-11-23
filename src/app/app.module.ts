import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyBlogResolverService } from './my-blog-resolver.service';
import { MyBlogRestService } from './myblog.service';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { NoPageComponent } from './components/no-page/no-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    HomeComponent,
    NoPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyBlogRestService, MyBlogResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
