import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StuffOnlyComponent } from './stuff-only/stuff-only.component';
import { CacheControlInterceptor } from './_interceptor/cache-control.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { SideComponent } from './side/side.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NewHomeComponent } from './new-home/new-home.component';
import { LandingComponent } from './landing/landing.component';
import { PriorityComponent } from './priority/priority.component';
import { UniqueComponent } from './unique/unique.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaFormsModule, RecaptchaSettings } from 'ng-recaptcha';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { OfferPopupComponent } from './offer-popup/offer-popup.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    StuffOnlyComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    NewHomeComponent,
    LandingComponent,
    PriorityComponent,
    UniqueComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    OfferPopupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ContactUsModule,
    ReactiveFormsModule,
    NzModalModule,
    NzNotificationModule,
    SharedModule,
    CarouselModule,
    NoopAnimationsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NzModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.siteKey,
      } as RecaptchaSettings,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheControlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
