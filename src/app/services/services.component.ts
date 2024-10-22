import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { services } from '../_constants/services.const';

@Component({
  selector: 'rm-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnDestroy {
  route$!: any;

  services = services;
  currentService!: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route$ = route.params.subscribe(
      (params: any) => {
        this.currentService = params.serviceType || this.services[0].link;
      }
    )
  }

  ngOnDestroy(): void {
    this.route$.unsubscribe();
  }

}
