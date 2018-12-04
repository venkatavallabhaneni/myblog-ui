import { Component, OnInit } from '@angular/core';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { ActivatedRoute } from '@angular/router';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awardsData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    const resolvedData: MyBlogResolved = this.route.snapshot.data['awards'];

    if (resolvedData != null && resolvedData.myblog != null) {
      this.awardsData = resolvedData.myblog;
    } else {
      this.error = resolvedData.error;
    }
  }

}
