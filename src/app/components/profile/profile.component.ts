import { Component, OnInit } from '@angular/core';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';
import { ActivatedRoute } from '@angular/router';
import { MyProfileResolved } from 'src/app/shared/models/myprofile.resolved.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: MyBlog[];
  error: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {


    const resolvedData: MyProfileResolved = this.route.snapshot.data['profile'];


    if (resolvedData != null && resolvedData.myblogs != null) {
      this.profileData = resolvedData.myblogs;
    } else {

      this.error = resolvedData.error;

    }
  }

}
