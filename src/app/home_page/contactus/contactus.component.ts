import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({ 
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  lat: number = 12.901555499999999;
  lng: number = 77.6026157;


  constructor() { }

  ngOnInit(): void {
  }

}
