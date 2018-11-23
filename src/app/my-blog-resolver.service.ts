import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyBlog } from './shared/models/MyBlog.model';
import { MyBlogRestService } from './myblog.service';
import { Observable, observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MyBlogResolverService implements Resolve<MyBlog | String> {

  constructor(private myblogRestServic: MyBlogRestService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyBlog | String> {
    const category: String = route.data['category'];
    return this.myblogRestServic.getContentByCategory(category)
      .pipe(catchError((err: String) => of(err)));
  }
}
