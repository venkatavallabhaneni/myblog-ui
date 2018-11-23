import { Component, OnInit } from '@angular/core';
import { MyBlogRestService } from 'src/app/myblog.service';
import { ActivatedRoute } from '@angular/router';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MyBlogResolverService]
})
export class AboutComponent implements OnInit {
  aboutData: MyBlog;
  error: MyBlog | String;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const resolvedData: MyBlog | String = this.route.snapshot.data['about'];
    if (resolvedData != null && resolvedData instanceof MyBlog) {
      this.aboutData = resolvedData;
    } else {
      this.error = resolvedData;
    }
  }

}
