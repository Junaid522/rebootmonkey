import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const Calendly: any;

@Component({
  selector: 'rm-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/rebootmonkey-michel/invite',
      parentElement: document.getElementById('CalendlyDiv'),
      prefill: {},
      utm: {}
     });
  }

}
