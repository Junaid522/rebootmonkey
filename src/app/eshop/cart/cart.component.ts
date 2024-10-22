import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ShopService } from '../../_injectible-services/shop.service';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/_injectible-services/account.service';

@Component({
  selector: 'rm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  items: any[] = [];
  total!: number;
  formGroup!: FormGroup;
  activeTab: number = 0;

  successfulPayment!: boolean;
  loginState$: any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private notification: NzNotificationService,
    private shopService: ShopService,
    private accountService: AccountService,
    private layoutService: LayoutService,
  ) {
    this.loginState$ = this.layoutService.loginState$;
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      location: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.subscriptions.push(this.layoutService.shoppingCart$.subscribe((cartItems: any) => {
      console.log(cartItems);
      this.items = cartItems.map((ci: any) => {
        ci.count = ci.quantity;
        ci.name = ci.product_name;
        let setupPrice = 0;
        ci.option_values.forEach((value: any) => {
          // setupPrice += value.price_increase;
          setupPrice += 0;
        });
        ci.setupPrice = setupPrice;
        return ci;
      });
      this.countChange();
    }),
    this.activatedRoute.queryParams.subscribe(
      (params: any) => {
        if (+params.success === 1) {
          this.successfulPayment = true;
          this.activeTab = 3;
        } else if (+params.success === 0) {
          this.successfulPayment = false;
          this.activeTab = 3;
        }
      }
    ));
  }

  remove(id: any) {
    this.items = this.items.filter(e => e.id !== id);
    this.countChange();
  }

  success() {
    this.route.navigateByUrl('/shop/success');
  }

  countChange() {
    this.total = 0;
    this.items.forEach((item: any) => {
      this.total += (item.price * item.count)
    });
  }

  stripe() {
    // this.accountService.getCustomer(localStorage.getItem('username') || '').subscribe(
    //   (account: any) => {
    //     const id = account.id;
    //     this.shopService.makeAnOrder(id, localStorage.getItem('shoppingCartId') || '').subscribe(
    //       (order: any) => {
    //         const orderId = order.id;
    //         this.shopService.checkout(orderId).subscribe(
    //           res => {
    //             document.location.href = res;
    //           }
    //         );
    //       }
    //     );
    //   }
    // );
  }

  handleOk(): void {
    this.formGroup.markAsTouched();
    let hasErrors;
    Object.keys(this.formGroup.controls).forEach(key => {
      //@ts-ignore
      if (this.formGroup.get(key).errors) {
        hasErrors = true;
      }
    });
    if (!hasErrors) {
      console.log(this.formGroup.value);
      // const order: any = {...this.selectedConfiguration};
      // order.contact = this.formGroup.value;
      // order.fullrack_id = 0;
      // order.rack_id = 0;
      // this.productId = +this.productId;

      // order.totalprice = order.payment;
      // delete order.payment;


      // if (this.tab === 'frack') {
      //   order.fullrack_id = this.productId;
      // } else {
      //   order.rack_id = this.productId;
      // }
      // this.shopService.order(order).subscribe(
      //   order => {
      //     this.notification.success(
      //       'Order Placed !',
      //       'Order placed successfully',
      //       { nzPlacement: 'bottom' }
      //     );
      //     this.isVisible = false;
      //   }
      // )
    } else {
      Object.keys(this.formGroup.controls).forEach(key => {
        //@ts-ignore
        Object.keys(this.formGroup.get(key).errors || {}).forEach(errorKey => {
          switch (errorKey) {
            case 'required':
              this.notification.error(
                'Required field',
                `<span class="uppercase">${key}</span> is ${errorKey}`,
                { nzPlacement: 'bottom' }
              );
              break;
            case 'email':
              this.notification.error(
                'Invalid',
                `Email is invalid`,
                { nzPlacement: 'bottom' }
              );
              break;
          }
        });
      });
    }
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
  }

  emptyCart() {
    this.layoutService.setShoppingCartId(undefined);
    this.layoutService.emptyCart();
    this.route.navigate(['/shop']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

}
