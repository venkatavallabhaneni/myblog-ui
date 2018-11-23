import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyBlog } from 'src/app/shared/models/MyBlog.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expData: MyBlog;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.expData = this.route.snapshot.data['experience'];
  }

}
