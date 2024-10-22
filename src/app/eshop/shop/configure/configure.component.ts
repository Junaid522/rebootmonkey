import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from '../../../_injectible-services/shop.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LayoutService } from 'src/app/_injectible-services/layout.service';


@Component({
  selector: 'rm-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnDestroy {
  isVisible!: boolean;

  formGroup!: FormGroup;

  configuration = {
    payment: [{
      title: '1 Month',
    }, {
      title: '3 Months (-2%)'
    }, {
      title: '6 Months (-4%)'
    }, {
      title: '12 Months (-9%)'
    }, {
      title: '24 Months (-18%)'
    }, {
      title: '36 Months (-25%)'
    }],
    contractDuration: [{
      title: '12 Months',
    }, {
      title: '24 Months (-6%)'
    }, {
      title: '36 Months (-11%)'
    }],
    remoteHands: [{
      title: 'Basic – 24x7x12 (incl.)',
    }, {
      title: 'Bronze – 24x7x4 (€ 85.00)'
    }, {
      title: 'Silver – 24x7x2 (€ 160.00)'
    }, {
      title: 'Gold – 24x7x1 (€ 333.00)'
    }, {
      title: 'Platinum 24x7x½ (€ 650.00)'
    }],
    ipv4: [{
      title: '1 (incl.)',
    }, {
      title: '2 (€ 2.70)'
    }, {
      title: '3 (€ 5.50)'
    }, {
      title: '4 (€ 8.10)'
    }, {
      title: '5 (€ 10.80)'
    }],
    speed: [{
      title: '100Mbps Unmetered (incl.)',
    }, {
      title: '100Mbps 95th percentile (€ 13.10)'
    }, {
      title: '1 Gbps Unmetered (€ 81.00)'
    }],
    management: [{
      title: 'Remote Power Port (incl.)',
    }, {
      title: '2x Remote Power Port (€ 5.00)'
    }],
  };


    selectedConfiguration = {
      payment: this.configuration.payment[0].title,
      contractDuration: this.configuration.contractDuration[0].title,
      remoteHands: this.configuration.remoteHands[0].title,
      ipv4: this.configuration.ipv4[0].title,
      speed: this.configuration.speed[0].title,
      management: this.configuration.management[0].title,
      access: true,
    };

  queryParams$!: Subscription;

  data!: any;
  tab!: string;
  productId!: any;

  total: number = 0;

  optionsCategories!: any[];

  constructor(
    private shopService: ShopService,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NzNotificationService
  ) {
    this.queryParams$ = this.route.queryParams.subscribe(
      (params: any) => {
        this.tab = params.tab;
        this.productId = params.id;
        // this.shopService.getItem(this.tab, this.productId).subscribe(
        //   data => this.data = data
        // );
        // this.shopService.getOptionsCategories().subscribe(
        //   (cats: any) => {
        //     this.optionsCategories = cats;
        //     this.shopService.getProduct(this.productId).subscribe(
        //       (data: any) => {
        //         this.optionsCategories = this.optionsCategories.map(
        //           (c: any) => {
        //             c.valuesFound = data.options.find((dop: any) => dop.option_category_id == c.id) !== undefined;
        //             return c;
        //           }
        //         )
        //         data.options = data.options.map((o: any) => {
        //           o.option_category_name = cats.find((c: any) => c.id === o.option_category_id).name;
        //           o.option_values = o.option_values.map((ov: any) => {
        //             ov.price = ov.price_deccrease || ov.price_increase || 0;
        //             return ov;
        //           });
        //           if (o.option_values.length === 1) {
        //             o.selectedId = o.option_values[0].id;
        //             o.selectedValue = o.option_values[0].name;
        //             o.selectedPrice = o.option_values[0].price;
        //           }
        //           return o;
        //         })
        //         this.data = data;
        //       }
        //     );
        //   }
        // )
      }
    );
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      location: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
    });
  }

  addToCart() {
    const productItem = {
      quantity: 1,
      price: this.total,
      product_id: this.data.id,
      option_values: this.data.options.filter((o: any) => o.selectedId).map((o: any) => {
        const no = {
          option_id: o.selectedId,
          price_increase: o.selectedPrice,
          id: o.id
        };
        return no;
      })
    }
    if (!localStorage.getItem('shoppingCartId')) {
      // this.shopService.createCart().subscribe(
      //   cart => {
      //     this.addItemToCart(cart.id, productItem);
      //     this.layoutService.setShoppingCartId(cart.id);
      //   });
    } else {
     // this.addItemToCart(localStorage.getItem('shoppingCartId') || '', productItem);
    }
  }

  // addItemToCart(cartId: string, productItem: any) {
  //   this.shopService.addProductItem(productItem).subscribe(
  //     res => {
  //       console.log(res);
  //       const cartItem = {
  //         product_item_id: res.id,
  //         cart_id: cartId,
  //         quantity: 1
  //       };
  //       this.shopService.addItemToCart(cartItem).subscribe(
  //         cartItem => {
  //           this.shopService.getProductItemDetails(cartItem.product_item_id).subscribe(
  //             res => {
  //               this.layoutService.addToShoppingCart(res);
  //               this.notification.success(
  //                 'Item added !',
  //                 'Item added to cart successfully',
  //                 { nzPlacement: 'bottom' }
  //               );
  //               this.router.navigate(['/shop/cart']);
  //             }
  //           )
  //         }
  //       )
  //     }
  //   )
  // }

  showModal(): void {
    // this.isVisible = true;
    this.router.navigate(['/shop/cart']);
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
      const order: any = {...this.selectedConfiguration};
      order.contact = this.formGroup.value;
      order.fullrack_id = 0;
      order.rack_id = 0;
      this.productId = +this.productId;

      order.totalprice = order.payment;
      delete order.payment;


      if (this.tab === 'frack') {
        order.fullrack_id = this.productId;
      } else {
        order.rack_id = this.productId;
      }
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
    this.isVisible = false;
  }

  ngOnDestroy(): void {
    this.queryParams$.unsubscribe();
  }

  recalculate() {
    this.total = this.data.price;
    this.optionsCategories.forEach((item: any) => {
      this.data.options.forEach((productOption: any) => {
        if (productOption.selectedValue && productOption.option_category_id === item.id) {
          this.total += productOption.selectedPrice
        }
      });
    });
  }

}
