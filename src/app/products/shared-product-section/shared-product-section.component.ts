import { Component } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-shared-product-section',
  templateUrl: './shared-product-section.component.html',
  styleUrls: ['./shared-product-section.component.scss']
})
export class SharedProductSectionComponent {

  constructor(
    private layoutService: LayoutService
  ) { }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }
}
