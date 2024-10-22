import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path: '', component: ContactUsComponent},
  {path: 'thank-you', component: ThankYouComponent},
]

@NgModule({
  declarations: [
    ContactUsComponent,
    ThankYouComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RecaptchaModule,
  ],
  exports: [
    ContactUsComponent
  ],
})
export class ContactUsModule { }
