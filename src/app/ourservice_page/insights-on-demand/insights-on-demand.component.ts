import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-insights-on-demand',
  templateUrl: './insights-on-demand.component.html',
  styleUrls: ['./insights-on-demand.component.css']
})
export class InsightsOnDemandComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Insights on Demand');
  }
  clickedOnLogo() {
    // window.scroll(0,0);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
