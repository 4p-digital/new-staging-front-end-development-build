import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  public faqs = [];
  public entrepreneur = [];
  public business = [];
  public general = [];
  config: any;
  searchText: any;
  public isCollapsed;
  constructor(private myservice: ApiService, private titleService: Title) { }

  faqGet = () => {
    this.myservice.faq_entrepreneur().subscribe(
      data => {
        this.faqs = data.results;
        for (let i = 0; i < this.faqs.length; i++) {
          // console.log(JSON.stringify() + " test 2");
          this.entrepreneur = this.faqs[i].entrepreneur;
          this.business = this.faqs[i].business;
          this.general = this.faqs[i].general;
        }
      },
      error => {
        console.log(error + ' Error Faq Entrepreneur');
      }
    );
  }

  ngOnInit(): void {
    this.titleService.setTitle('FAQ');
    this.faqGet();
  }

}
