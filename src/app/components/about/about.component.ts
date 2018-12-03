import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    console.log(resolvedData);
    if (resolvedData != null && resolvedData.error == null) {
      this.aboutData = resolvedData.myblog;
      console.log('Venkat3 :: ' + this.error);
    } else {
      this.error = resolvedData.error;
      console.log('Venkat3 :: ' + this.error);
    }
  }

}
