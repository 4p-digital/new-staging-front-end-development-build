import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-entrepreneur',
  templateUrl: './entrepreneur.component.html',
  styleUrls: ['./entrepreneur.component.css']
})
export class EntrepreneurComponent implements OnInit {

  constructor(private myservice: ApiService,private titleService: Title) { }

  entrepreneur_article = [];
  entrepreneur_article_Get = () => {
    this.myservice.entrepreneur_article_service().subscribe(
      data => {
        console.log(data);
        this.entrepreneur_article = data
      },
      error => {
        console.log(error + ' Error mediumblog');
      }
    );
  }

  ngOnInit(): void {
    this.titleService.setTitle('Entrepreneur');
    this.entrepreneur_article_Get();
  }

}
