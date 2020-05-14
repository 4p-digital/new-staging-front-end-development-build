import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-office-space',
  templateUrl: './office-space.component.html',
  styleUrls: ['./office-space.component.css']
})
export class OfficeSpaceComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Current Account');
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
