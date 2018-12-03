import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyBlogRestService } from './myblog.service';
import { Observable, observable, of } from 'rxjs';
import { MyBlogResolved } from './shared/models/resolved-myblog.model';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class MyBlogResolverService implements Resolve<MyBlogResolved> {

  constructor(private myblogRestServic: MyBlogRestService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyBlogResolved> {
    const category: String = route.data['category'];
    return this.myblogRestServic.getContentByCategory(category).pipe(
      map((myblogdata) => new MyBlogResolved(myblogdata, catchError((error: any) => of(new MyBlogResolved(null, error))))));
  }
}
