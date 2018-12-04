import { Component, OnInit } from '@angular/core';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { ActivatedRoute } from '@angular/router';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interestsData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    const resolvedData: MyBlogResolved = this.route.snapshot.data['interests'];

    if (resolvedData != null && resolvedData.myblog != null) {
      this.interestsData = resolvedData.myblog;
    } else {
      this.error = resolvedData.error;
    }
  }

}
