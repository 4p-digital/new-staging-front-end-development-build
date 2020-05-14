import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private myservice: ApiService,private titleService: Title) { }

  technology_article = [];
  technology_article_Get = () => {
    this.myservice.technology_article_service().subscribe(
      data => {
        console.log(data);
        this.technology_article = data
      },
      error => {
        console.log(error + ' Error mediumblog');
      }
    );
  }
  ngOnInit(): void {
    this.titleService.setTitle('Technology');
    this.technology_article_Get();
  }

}
