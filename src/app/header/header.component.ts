import { Component, ElementRef, ViewChild } from '@angular/core';
import { products } from 'src/app/_constants/products.const';
import { services } from 'src/app/_constants/services.const';
import { menu } from '../_constants/menu.const';
import { LayoutService } from '../_injectible-services/layout.service';

@Component({
  selector: 'rm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('sideNav') sideNav!: ElementRef;
  sidebarState: boolean = false;
  serviceLinks = services;
  productLinks = products;
  menu = menu;
  
  collapse: boolean = true;

  shoppingCartLength$: any;
  loginState$: any;

  constructor(
    private layoutService: LayoutService
  ) {
    this.shoppingCartLength$ = this.layoutService.shoppingCartLength$;
    this.loginState$ = this.layoutService.loginState$;
  }

  toggleSidebar() {
    this.sidebarState = !this.sidebarState;
  }

  logout() {
    this.layoutService.setLoginState(undefined);
  }

}
