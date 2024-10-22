import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountersComponent } from './counters/counters.component';
import { DiscoverComponent } from './discover/discover.component';
import { ServicesComponent } from './services/services.component';
import { PeopleComponent } from './people/people.component';
import { ProcessComponent } from './process/process.component';
import { ProductsComponent } from './products/products.component';
import { WhyComponent } from './why/why.component';
import { MapComponent } from './map/map.component';
import { LookingComponent } from './looking/looking.component';
import { TouchComponent } from './touch/touch.component';
import { ColocationComponent } from '../products/colocation/colocation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: ColocationComponent},
]

@NgModule({
  declarations: [
    CountersComponent,
    DiscoverComponent,
    ServicesComponent,
    PeopleComponent,
    ProcessComponent,
    ProductsComponent,
    WhyComponent,
    MapComponent,
    LookingComponent,
    TouchComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ColocationModule { }
