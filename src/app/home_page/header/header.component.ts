import { Component, Input, OnInit, HostListener, Inject, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

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

  fullobje = [];
  Name: string;
  LastName: string;
  lastname:string;
  Email: string;
  Password: string;
  CnfPassword: string;

  regiuserData = {};
  LgusrData = {};

  loginErrorMsg: string;

  registerUserData: Array<any>[] = [];
  modalReference: NgbModalRef;


  ENname: string;
  ENlastname: string;
  ENemail: string;
  ENpassword: string;

  email: string;
  password: string;

  fpemail: string;
  emailError:string;
  closewindo: boolean;
  constructor(
    private modalService: NgbModal,
    protected _router: Router,
    public _auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private el: ElementRef,
    private formBuilder: FormBuilder,
  ) { }


  // REGISTRION START
  logOut() {
    console.log("logout");
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }




  login(lgUserData) {
    this.LgusrData = lgUserData.value;


    this._auth.loginUser(this.LgusrData)
      .subscribe(
        res => {
          console.log(JSON.stringify(res) + " login Sucess");
          localStorage.setItem('token', res.token)
          this._router.navigate(['/userprofile'])
          // this.modalService.dismissAll;

          // this.closewindo = true;
          this.modalService.dismissAll();
        },
        err => {

          console.log(err + " Login error");
          if (err instanceof HttpErrorResponse) {
            if (err.status === 400) {
              this.loginErrorMsg = " Invalid Email or Password"
              // this._router.navigate(['/home'])

            }
          }

        }
      )

    console.log(JSON.stringify(this.LgusrData) + ' login ');
  }

  EntreprneurRegister(userData) {
    this.regiuserData = userData.value;

    this._auth.registerUser(this.regiuserData)
      .subscribe(
        res => {
          console.log(JSON.stringify(res) + " Register Sucess");
        },
        err => {
          this.emailError = err.error.email;

          console.log(err.error.email + " test 1")
          // console.log(JSON.stringify(err) + " Register error")
        }
      )

  }

  forgotPassword(fp) {

  }

  // REGISTRION END


  @HostListener("window:scroll", [])
  onWindowScroll() {

    // console.log(offset);
    if ($(window).width() < 576) {
      // alert('Mobile');
      this.navPosition = 'true';
    }
    else {
      const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
      // alert('desktop');
      if (offset >= 100) {
        this.navPosition = 'true';
      } else {
        this.navPosition = 'false';
      }
    }

  }


  // on
  clickedOnLogo() {
    // window.scroll(0,0);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
    this.modalService.open(Login, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  forgotPassModel(ForgotPassword) {
    this.modalService.open(ForgotPassword, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
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
    } else if (this.closewindo == true) {
      return 'model-close';
      // this.closewindo = false;
    } else {
      return `with: ${reason}`;
    }
  }


  // SIDE NAV START
  openNav() {
    document.getElementById('myNav').style.width = '20%';
    document.getElementById('myNav').style.opacity = '1';
    document.getElementById('myNav').style.boxShadow = '0px 2px 3px 2px #00000024';
  }

  closeNav() {
    document.getElementById('myNav').style.opacity = '0';
    document.getElementById('myNav').style.width = '0%';
    document.getElementById('myNav').style.boxShadow = 'none';
  }
  // SIDE NAV END



  ngOnInit(): void {
    document.getElementById('myNav').style.boxShadow = 'none';

    if ($(window).width() < 576) {
      this.navPosition = 'true';
    }

  }



}
