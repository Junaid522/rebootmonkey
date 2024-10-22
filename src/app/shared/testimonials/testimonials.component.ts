import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rm-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {

  testimonials = [
    {
      title: 'Excellent Support',
      body: `survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of`,
      name: 'Alexy Sily',
      position: 'CEO & CTO'
    }
  ]

  constructor() { }

  

}

