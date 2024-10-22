import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../_constants/products.const';

@Component({
  selector: 'rm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy {
  route$!: any;

  products = products;
  currentProduct!: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route$ = route.params.subscribe(
      (params: any) => {
        this.currentProduct = params.productType || this.products[0].link;
      }
    )
  }

  ngOnDestroy(): void {
    this.route$.unsubscribe();
  }

}
