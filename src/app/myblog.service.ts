import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

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
      httpOptions);
  }

  getProfileContent(categories): Observable<MyBlog[]> {

    return this.httpClient.get<MyBlog[]>(environment.apiUrl + '/' + environment.apiContentPath + '/' + categories,
      httpOptions);
  }
}





