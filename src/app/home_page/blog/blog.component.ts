import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { from } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public isCollapsed = false;

  constructor(private myservice: ApiService,private titleService: Title) { }

  mediumblogs_article = [];

  mediumblogs_articleGet = () => {
    this.myservice.mediumblogs_article_service().subscribe(
      data => {
        console.log(data);
        this.mediumblogs_article = data
        // for (let i = 0; i < this.GenresWiseAnalyticsB.length; i++) {
        //   this.GenresWiseAnalyticsC = this.GenresWiseAnalyticsB[i].historgram.buckets;
        // }
      },
      error => {
        console.log(error + ' Error mediumblog');
      }
    );
  }



  ngOnInit(): void {
    this.titleService.setTitle('Our Partners');
    this.mediumblogs_articleGet();
  }

}
