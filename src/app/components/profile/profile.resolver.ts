import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyBlogRestService } from 'src/app/myblog.service';
import { Observable, observable, of } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { MyProfileResolved } from 'src/app/shared/models/myprofile.resolved.model';



@Injectable()
export class MyProfileResolverService implements Resolve<MyProfileResolved> {

  constructor(private myblogRestServic: MyBlogRestService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MyProfileResolved> {
    const categories: String = route.data['categories'];
    return this.myblogRestServic.getProfileContent(categories).pipe(
      map((myProfileData) => new MyProfileResolved(myProfileData, catchError((error: any) => of(new MyProfileResolved(null, error))))));
  }


}
