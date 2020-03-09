import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { WINDOW_PROVIDERS } from './window.service';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { ScrollEventModule } from 'ngx-scroll-event';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JqueryComponent } from './jquery/jquery.component';
import { HomeComponent } from './home_page/home/home.component';
import { HeaderComponent } from './home_page/header/header.component';
import { FooterComponent } from './home_page/footer/footer.component';
import { HomebodyComponent } from './home_page/homebody/homebody.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './home_page/aboutus/aboutus.component';
import { PageNotFoundComponent } from './home_page/page-not-found/page-not-found.component';
import { OurservicesComponent } from './home_page/ourservices/ourservices.component';
import { BusinessServiceComponent } from './ourservice_page/business-service/business-service.component';
import { OfficeSpaceComponent } from './ourservice_page/office-space/office-space.component';
import { CurrentAccountComponent } from './ourservice_page/current-account/current-account.component';
import { MentorsCoachingComponent } from './ourservice_page/mentors-coaching/mentors-coaching.component';
import { InsightsOnDemandComponent } from './ourservice_page/insights-on-demand/insights-on-demand.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TermsConditionsComponent } from './home_page/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './home_page/privacy-policy/privacy-policy.component';
import { BlogComponent } from './home_page/blog/blog.component';
import { FaqComponent } from './home_page/faq/faq.component';
import { ContactusComponent } from './home_page/contactus/contactus.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    JqueryComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomebodyComponent,
    AboutusComponent,
    PageNotFoundComponent,
    OurservicesComponent,
    BusinessServiceComponent,
    OfficeSpaceComponent,
    CurrentAccountComponent,
    MentorsCoachingComponent,
    InsightsOnDemandComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    BlogComponent,
    FaqComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollEventModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCmDnWPXKL0ZeIyYhtqPz31-UgaWOn1mM'
    })
  ],
  providers: [
    Title,
    ApiService,
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
