import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // baseurl = "http://127.0.0.1:8000"
  baseurl = "http://api-app.eba-kmmuji8h.us-west-2.elasticbeanstalk.com"

  private _registerUrl = "/api/user/create/";
  private _loginUrl = "/api/user/token/";
  private _getuserDetails = "/api/user/me/";

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.baseurl + this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.baseurl + this._loginUrl, user)
  }

  displyUserDetails() {
    return this.http.get<any>(this.baseurl + this._getuserDetails)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

}
