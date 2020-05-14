import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userDetails: any;
  public user = <{ email: string, name: string }>{};

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }


  letdisplyUserDetails() {
    this._auth.displyUserDetails()
      .subscribe(
        res => {
          console.log(JSON.stringify(res) + " user Details");
          this.userDetails = res;
        },
        err => {
          console.log(err + " user error");
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this._router.navigate(['/home'])
            }
          }
        }
      )
  }

  ngOnInit(): void {
    this.letdisplyUserDetails();
  }






}
