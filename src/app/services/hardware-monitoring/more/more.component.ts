import { Component } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-more-hardware-monitoring',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss', '../hardware-monitoring.component.scss']
})
export class MoreComponent {

  constructor(
    private layoutService: LayoutService
  ) { }
  
  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
