import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @Input() title!: string;
  constructor() { }

}
