import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EshopComponent } from './eshop.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { OverviewComponent } from './overview/overview.component';
import { RackComponent } from './rack/rack.component';
import { FrackComponent } from './frack/frack.component';
import { CageComponent } from './cage/cage.component';
import { ShopComponent } from './shop/shop.component';
import { FiltersComponent } from './shop/filters/filters.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigureComponent } from './shop/configure/configure.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {path: '', component: EshopComponent},
  {path: 'configure', component: ConfigureComponent},
  {path: 'cart', component: CartComponent},
]

@NgModule({
  declarations: [
    EshopComponent,
    LandingComponent,
    OverviewComponent,
    RackComponent,
    FrackComponent,
    CageComponent,
    ShopComponent,
    FiltersComponent,
    ConfigureComponent,
    CartComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    NzTabsModule,
    NzSliderModule,
    FormsModule,
    NzCollapseModule,
    NzModalModule,
    ReactiveFormsModule,
    NzInputModule,
    RouterModule.forChild(routes)
  ]
})
export class EshopModule { }
