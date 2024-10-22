import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from '../../_injectible-services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnDestroy {
  @Input() type!: string;
  @Input() categoryId!: number;

  queryParams$!: Subscription;

  data$!: Observable<any>;
  tab!: string;
  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
    private layoutService: LayoutService,
  ) {
    this.queryParams$ = this.route.queryParams.subscribe(
      (params: any) => {
        this.tab = params.tab;
        // this.data$ = this.shopService.getItems(this.tab === 'frack' ? true : false);
       // this.data$ = this.shopService.getProducts(params.id);
      }
    )
  }

  filter(e: any) {
    console.log(e)
   // this.data$ = this.shopService.getItems(this.tab === 'frack' ? true : false, e.location, e.power, e.price_from, e.price_to);
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

  ngOnDestroy(): void {
    this.queryParams$.unsubscribe();
  }

}
