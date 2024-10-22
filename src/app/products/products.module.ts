import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedProductSectionComponent } from './shared-product-section/shared-product-section.component';
import { SlaComponent } from './sla/sla.component';
import { RackServersComponent } from './rack-servers/rack-servers.component';
import { IpTransitComponent } from './ip-transit/ip-transit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoreComponent as RackServersMoreComponent } from './rack-servers/more/more.component';
import { MoreComponent as IPTransitMoreComponent } from './ip-transit/more/more.component';
import { MoreComponent as SLAMoreComponent } from './sla/more/more.component';
import { ColocationComponent } from './colocation/colocation.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'rack-servers/more', component: RackServersMoreComponent },
  { path: 'ip-transit', component: IpTransitComponent },
  { path: 'sla', component: SlaComponent },
  { path: ':productType', component: ProductsComponent },
  { path: 'ip-transit/more', component: IPTransitMoreComponent },
  { path: 'sla/more', component: SLAMoreComponent },
  { path: '', component: ProductsComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    SharedProductSectionComponent,
    SlaComponent,
    RackServersComponent,
    IpTransitComponent,
    RackServersMoreComponent,
    IPTransitMoreComponent,
    SLAMoreComponent,
    ColocationComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
