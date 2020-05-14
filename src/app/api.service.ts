import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  // baseurl = 'http://127.0.0.1:8000';

  baseurl = 'http://api-app.eba-kmmuji8h.us-west-2.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  mediumblogs_article_service(): Observable<any> {
    return this.http.post<any>(this.baseurl + '/blog/our_partner_rss', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  business_article_service(): Observable<any> {
    return this.http.post<any>(this.baseurl + '/blog/toi_business_rss', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  technology_article_service(): Observable<any> {
    return this.http.post<any>(this.baseurl + '/blog/toi_technology_news_rss', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  entrepreneur_article_service(): Observable<any> {
    return this.http.post<any>(this.baseurl + '/blog/entrepreneur_rss', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  faq_entrepreneur(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/faq/', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  contactus_service(): Observable<any> {
    return this.http.post<any>(this.baseurl + '/contactus/', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  testGetEvent() {
    return this.http.get<any>(this.baseurl)
  }


}
