import { Component } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-shared-service-section',
  templateUrl: './shared-service-section.component.html',
  styleUrls: ['./shared-service-section.component.scss']
})
export class SharedServiceSectionComponent {

  constructor(
    private layoutService: LayoutService
  ) { }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }
}
