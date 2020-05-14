import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomebodyComponent } from './home_page/homebody/homebody.component';
import { AboutusComponent } from './home_page/aboutus/aboutus.component';
import { PageNotFoundComponent } from './home_page/page-not-found/page-not-found.component';
import { OurservicesComponent } from './home_page/ourservices/ourservices.component';
import { BusinessServiceComponent } from './ourservice_page/business-service/business-service.component';
import { OfficeSpaceComponent } from './ourservice_page/office-space/office-space.component';
import { CurrentAccountComponent } from './ourservice_page/current-account/current-account.component';
import { MentorsCoachingComponent } from './ourservice_page/mentors-coaching/mentors-coaching.component';
import { InsightsOnDemandComponent } from './ourservice_page/insights-on-demand/insights-on-demand.component';
import { TermsConditionsComponent } from './home_page/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './home_page/privacy-policy/privacy-policy.component';
import { BlogComponent } from './home_page/blog/blog.component';
import { FaqComponent } from './home_page/faq/faq.component';
import { ContactusComponent } from './home_page/contactus/contactus.component';
import { OurPartnersComponent } from './blog/our-partners/our-partners.component';
import { TechnologyComponent } from './blog/technology/technology.component';
import { EntrepreneurComponent } from './blog/entrepreneur/entrepreneur.component';
import { BusinessComponent } from './blog/business/business.component';
import { UserprofileComponent } from './userdash/userprofile/userprofile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomebodyComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'ourservice', component: OurservicesComponent },
  { path: 'ourservice/business-service', component: BusinessServiceComponent },
  { path: 'ourservice/office-space', component: OfficeSpaceComponent },
  { path: 'ourservice/current-account', component: CurrentAccountComponent },
  { path: 'ourservice/mentors-coaching', component: MentorsCoachingComponent },
  { path: 'ourservice/insights-on-demand', component: InsightsOnDemandComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactus', component: ContactusComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'blog/our-partners', component: OurPartnersComponent },
  { path: 'blog/technology', component: TechnologyComponent },
  { path: 'blog/business', component: BusinessComponent },
  { path: 'blog/entrepreneur', component: EntrepreneurComponent },

  // UserDashborad
  {
    path: 'userprofile', component: UserprofileComponent,
    canActivate : [AuthGuard]
  },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
