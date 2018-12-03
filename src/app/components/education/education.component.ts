import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    const resolvedData: MyBlogResolved = this.route.snapshot.data['education'];

    if (resolvedData != null && resolvedData.myblog != null) {
      this.educationData = resolvedData.myblog;
    } else {
      this.error = resolvedData.error;
    }
  }

}
