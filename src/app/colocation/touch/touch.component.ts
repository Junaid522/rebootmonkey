import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-touch',
  templateUrl: './touch.component.html',
  styleUrls: ['./touch.component.scss']
})
export class TouchComponent {

  constructor(
    private layoutService: LayoutService
  ) { }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }


}
