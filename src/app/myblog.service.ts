import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
    'Access-Control-Allow-Methods': 'GET,POST,PUT',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  })
};

@Injectable()
export class MyBlogRestService {


  constructor(private httpClient: HttpClient) { }
  getContentByCategory(category): Observable<MyBlog> {
    return this.httpClient.get<MyBlog>(environment.apiUrl + '/' + environment.apiContentPath + '/' + category,
      httpOptions).pipe(catchError(this.handleErrors ));
  }

  private handleErrors(errorResponse: HttpErrorResponse) {

    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side Error', errorResponse.error.message);
    } else {
      console.error('Server side Error', errorResponse);
    }
    return throwError('Some error please try again', errorResponse.error);

  }
}





