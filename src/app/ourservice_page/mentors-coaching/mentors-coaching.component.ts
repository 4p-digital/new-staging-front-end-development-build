import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mentors-coaching',
  templateUrl: './mentors-coaching.component.html',
  styleUrls: ['./mentors-coaching.component.css']
})
export class MentorsCoachingComponent implements OnInit {

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
