import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { ShopService } from '../_injectible-services/shop.service';
import { LayoutService } from '../_injectible-services/layout.service';

@Component({
  selector: 'rm-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss']
})
export class EshopComponent implements OnDestroy {
  queryParams$;
  tab!: string;
  categories$!: any;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    private layoutService: LayoutService,
    private router: Router,
  ) {
    this.queryParams$ = this.route.queryParams.subscribe(
      (params: any) => {
        this.tab = params.tab;
        if (!params.tab) {
          // this.router.navigate(['/shop'], {queryParams: {tab: 'overview'}})
        }
      }
    )
    //this.categories$ = this.shopService.getCategories();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

  ngOnDestroy(): void {
    this.queryParams$.unsubscribe();
  }


}
