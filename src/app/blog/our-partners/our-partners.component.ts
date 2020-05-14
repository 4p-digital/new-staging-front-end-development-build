import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.css']
})
export class OurPartnersComponent implements OnInit {

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
