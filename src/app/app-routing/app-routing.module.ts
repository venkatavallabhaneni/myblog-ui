import { NgModule } from '@angular/core';
import { MyBlogResolverService } from '../my-blog-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { routes } from '../app.router';
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), HttpClientModule
  ],
  exports: [RouterModule],
  providers: [MyBlogResolverService]
})

export class AppRoutingModule { }
