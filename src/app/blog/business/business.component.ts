import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private myservice: ApiService,private titleService: Title) { }

  business_article = [];
  business_article_Get = () => {
    this.myservice.business_article_service().subscribe(
      data => {
        console.log(data);
        this.business_article = data
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
    this.titleService.setTitle('Business');
    this.business_article_Get();
  }

}
