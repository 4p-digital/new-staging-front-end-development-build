import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { WINDOW_PROVIDERS } from './window.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { OurPartnersComponent } from './blog/our-partners/our-partners.component';
import { BusinessComponent } from './blog/business/business.component';
import { TechnologyComponent } from './blog/technology/technology.component';
import { EntrepreneurComponent } from './blog/entrepreneur/entrepreneur.component';
import { AuthService } from './auth.service';
import { UserprofileComponent } from './userdash/userprofile/userprofile.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';



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
    OurPartnersComponent,
    BusinessComponent,
    TechnologyComponent,
    EntrepreneurComponent,
    UserprofileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollEventModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDCmDnWPXKL0ZeIyYhtqPz31-UgaWOn1mM'
    })
  ],
  providers: [
    Title,
    ApiService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    NgbModal,
    WINDOW_PROVIDERS,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
