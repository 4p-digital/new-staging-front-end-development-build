import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ElementRef, Inject, Injectable, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;


@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.css']
})
@Injectable()
export class HomebodyComponent implements OnInit {

  customOptions: any = {
    loop: true,
    autoplay: true,
    autoplayHoverPause:true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: false,
    slideTransition:'linear',
    dots: false,
    navSpeed: 500,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
        nav:false
      },
      400: {
        items: 1,
        nav:false
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  //




  constructor(private titleService: Title, private modalService: NgbModal) { }
  @ViewChild('video') video: ElementRef;

  public ScrollMagic: any;
  public controller: any;
  closeResult: string;




  ngOnInit(): void {
    this.titleService.setTitle('thinkAhoy');
  }

  // videobanner_model

  video_banner(videobanner_model) {
    this.modalService.open(videobanner_model, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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

  BannerVidPlayPause = () => {
    const myVideo = $('#video');
    if (myVideo.get(0).muted) {
      myVideo.get(0).muted = false;
    } else {
      myVideo.get(0).muted = true;
    }
  }



}
