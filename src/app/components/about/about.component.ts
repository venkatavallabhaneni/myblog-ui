import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyBlogResolverService } from 'src/app/my-blog-resolver.service';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { MyBlogResolved } from 'src/app/shared/models/resolved-myblog.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MyBlogResolverService]
})
export class AboutComponent implements OnInit {
  aboutData: MyBlog;
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {


    const resolvedData: MyBlogResolved = this.route.snapshot.data['about'];

    if (resolvedData != null && resolvedData.myblog != null) {
      this.aboutData = resolvedData.myblog;
    } else {
      console.log('Venkat 67' + resolvedData);
      this.error = resolvedData.error;

    }
  }

}
