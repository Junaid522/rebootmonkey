import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoParticlesComponent } from './logo-particles/logo-particles.component';
import { PartnersComponent } from './partners/partners.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VideoComponent } from './video/video.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [
    LogoParticlesComponent,
    PartnersComponent,
    TestimonialsComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    NzCarouselModule
  ],
  exports: [
    LogoParticlesComponent,
    PartnersComponent,
    TestimonialsComponent,
    VideoComponent,
    CommonModule
  ]
})
export class SharedModule { }
