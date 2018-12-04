import { Component, OnInit } from '@angular/core';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { ActivatedRoute } from '@angular/router';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  myblogData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    const resolvedData: MyBlogResolved = this.route.snapshot.data['myblog'];

    if (resolvedData != null && resolvedData.myblog != null) {
      this.myblogData = resolvedData.myblog;
    } else {
      this.error = resolvedData.error;
    }
  }

}
