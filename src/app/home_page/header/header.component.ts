import { Component, OnInit, HostListener, Inject, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../window.service'

import { ScrollEvent } from 'ngx-scroll-event';


import { from } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  closeResult: string;
  navPosition: string = 'false';

  constructor(
    private modalService: NgbModal,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private el: ElementRef
  ) { }



  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(offset);
    if (offset >= 300) {
      this.navPosition = 'true';
    } else {
      this.navPosition = 'false';
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  EntreprneurOpen(EntreprneurModel) {
    this.modalService.open(EntreprneurModel, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  ServiceProviderOpen(ServiceProvider) {
    this.modalService.open(ServiceProvider, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  MentorOpen(Mentor) {
    this.modalService.open(Mentor, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  InvestorOpen(Investor) {
    this.modalService.open(Investor, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  LoginOpen(Login) {
    this.modalService.open(Login, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  openNav() {
    document.getElementById('myNav').style.width = '20%';
    document.getElementById('myNav').style.opacity = '1';
  }

  closeNav() {
    document.getElementById('myNav').style.opacity = '0';
    document.getElementById('myNav').style.width = '0%';
  }




  ngOnInit(): void {

  }

}
