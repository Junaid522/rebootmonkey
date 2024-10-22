import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';

@Component({
  selector: 'rm-looking',
  templateUrl: './looking.component.html',
  styleUrls: ['./looking.component.scss']
})
export class LookingComponent {

  constructor(
    private layoutService: LayoutService
  ) { }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
