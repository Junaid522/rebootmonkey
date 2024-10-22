import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetQuoteComponent } from './get-quote.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


const routes: Routes = [
  {path: '', component: GetQuoteComponent},
]

@NgModule({
  declarations: [
    GetQuoteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzNotificationModule,
    RouterModule.forChild(routes),
  ]
})
export class GetQuoteModule { }
