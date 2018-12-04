import { Component, OnInit } from '@angular/core';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { ActivatedRoute } from '@angular/router';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {

    const resolvedData: MyBlogResolved = this.route.snapshot.data['skills'];

    if (resolvedData != null && resolvedData.myblog != null) {
      this.skillsData = resolvedData.myblog;
    } else {
      this.error = resolvedData.error;
    }
  }

}
