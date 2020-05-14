import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-business-service',
  templateUrl: './business-service.component.html',
  styleUrls: ['./business-service.component.css']
})
export class BusinessServiceComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Business Service');
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
