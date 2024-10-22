import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ShopService } from '../../../_injectible-services/shop.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rm-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnDestroy {
  price: any = [1, 10000];
  powerModel!: string;
  locationModel!: string;
  locations$!: Observable<any>;
  power$!: Observable<any>;
  queryParams$!: Subscription;
  fireTimeout!: any;

  @Output() filtersChanges: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) {
    this.queryParams$ = this.route.queryParams.subscribe(
      (params: any) => {
      //  this.locations$ = this.shopService.getLocations(params.tab === 'frack' ? true : false);
       // this.power$ = this.shopService.getPower(params.tab === 'frack' ? true : false);
      }
    )
  }

  fireChange() {
    if (this.fireTimeout) {
      clearTimeout(this.fireTimeout);
    }
    this.fireTimeout = setTimeout(() => {
      this.filtersChanges.emit({
        location: this.locationModel,
        power: this.powerModel,
        price_from: this.price[0],
        price_to: this.price[1],
      });
    }, 1000);
  }

  ngOnDestroy(): void {
    this.queryParams$.unsubscribe();
  }

}
