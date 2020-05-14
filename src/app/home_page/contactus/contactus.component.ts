import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../api.service';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  // const Swal = require('sweetalert2')
  lat: number = 12.901555499999999;
  lng: number = 77.6026157;
  regiuserData = {};
  submitted = false;
  mail_msg: string;

  constructor(private titleService: Title, private myservice: ApiService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact Us');
  }

  contactform = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl(''),
  })

  get name() {
    return this.contactform.get('name');
  }

  get email() {
    return this.contactform.get('email');
  }


  form_submint_sucess() {
    Swal.fire({
      title: 'form subminted Successfully :)',
      icon: 'success',
      // confirmButtonText: 'close',
      timer: 3000
    })
  }

  form_submint_fail() {
    Swal.fire({
      title: 'form subminted Successfully :(',
      icon: 'error',
      timer: 3000
      // confirmButtonText: 'close'
    })
  }

  contactuspost() {
    this.submitted = true;
    this.form_submint_sucess();
    // stop if form is invalid
    if (this.contactform.invalid) {
      return;
    }

    // this.httpClient.post("http://api-app.eba-kmmuji8h.us-west-2.elasticbeanstalk.com/contactus/", this.contactform.value)
    this.httpClient.post("http://127.0.0.1:8000/contactus/", this.contactform.value)
      .subscribe(
        data => {
          // console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
          this.form_submint_fail();
        }
      );

    //rest form
    this.contactform.reset();
  }


  contactuspostTTTTTT(userData) {
    this.regiuserData = userData.value;

    this.httpClient.post("http://127.0.0.1:8000/contactus/", this.regiuserData)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );

  }

  // contactus_service()

}
