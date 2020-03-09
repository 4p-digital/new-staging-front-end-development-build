import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private myservice: ApiService) { }

  GenresWiseAnalyticsA = [];
  GenresWiseAnalyticsB = [];
  GenresWiseAnalyticsC = [];
  GenresWiseAnalyticsD = [];
  GenresWiseAnalyticsE = [];


  getGenresWiseAnalyticsTableGraph = () => {
    this.myservice.getAllGenresWiseAnalyticsGraph().subscribe(
      data => {
        this.GenresWiseAnalyticsB = data.aggregations.events.buckets;
        for (let i = 0; i < this.GenresWiseAnalyticsB.length; i++) {
          this.GenresWiseAnalyticsC = this.GenresWiseAnalyticsB[i].historgram.buckets;
          for (let j = 0; j < this.GenresWiseAnalyticsC.length; j++) {
            this.GenresWiseAnalyticsD.push(
              {
                // year: moment(this.GenresWiseAnalyticsC[j].key_as_string).format('MMM'),
                // value: this.GenresWiseAnalyticsC[j].total.value
              }
            );
          }
        }
      },
      error => {
        console.log(error + ' Error getGenresWiseAnalyticsTableGraph');
      }
    );
  }
  ngOnInit(): void {
  }

}
