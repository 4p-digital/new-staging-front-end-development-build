import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  baseurl = 'http://ec2-3-1-83-220.ap-southeast-1.compute.amazonaws.com:5001/_search?size=0';

  constructor(private http: HttpClient) { }

  inputdata = {};
  getAllGenresWiseAnalyticsGraph(): Observable<any> {
    return this.http.post<any>(this.baseurl, this.inputdata16, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
