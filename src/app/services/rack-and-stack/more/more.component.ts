import { Component } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-more-rack-and-stack',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss', '../rack-and-stack.component.scss']
})
export class MoreComponent {

  constructor(
    private layoutService: LayoutService
  ) { }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
