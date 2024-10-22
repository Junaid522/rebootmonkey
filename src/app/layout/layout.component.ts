import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '../_injectible-services/layout.service';

@Component({
  selector: 'rm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private layoutService: LayoutService,
  ) {
    this.route.params.subscribe(
      (params: any) => {
        
      }
    ) 
  }

  ngOnInit(): void {
    this.layoutService.contactUsVisible$.subscribe(
      (isVisible: boolean) => this.isVisible = isVisible
    );
    // this.shopService.getCartById(localStorage.getItem('shoppingCartId') || '').subscribe(
    //   cart => {
    //     console.log(cart);
    //     if (cart?.items) {
    //       cart.items.forEach((cartItem: any) => {
    //         this.shopService.getProductItemDetails(cartItem.product_item_id).subscribe(
    //           res => {
    //             this.layoutService.addToShoppingCart(res);
    //           }
    //         )
    //       });
    //     }
    //   }
    // )
  }
  contactUsDiscard() {
    this.layoutService.setContactUsVisible(false);
  }
}
