import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { LocationsComponent } from './locations/locations.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: AboutUsComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'locations', component: LocationsComponent}
]

@NgModule({
  declarations: [
    AboutUsComponent,
    CareersComponent,
    LocationsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutUsModule { }
