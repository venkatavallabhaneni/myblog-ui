import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    const resolvedData: MyBlogResolved = this.route.snapshot.data['experience'];

    if (resolvedData != null && resolvedData.error == null) {
      this.expData = resolvedData.myblog;
    } else if (resolvedData != null) {
      this.error = resolvedData.error;
    }
  }

}
