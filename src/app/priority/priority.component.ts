import { Component, OnInit, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
declare var $: any;
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'rm-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
})

export class PriorityComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: true,
    navText: ['<img src="../../../assets/chevron-left.webp" alt="services" />', '<img src="../../../assets/chevron-right.webp" alt="services" />'], // Swap 'next' and 'prev' for left/right arrow order
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    autoplay: true, // Add autoplay option
    autoplayTimeout: 5000, // Set the autoplay interval in milliseconds (e.g., 5000ms or 5 seconds)
    autoplayHoverPause: true, // Pause autoplay when hovering over the carousel
  }

  embeded: boolean = false;

  constructor(private layoutService: LayoutService) { }
//   ngOnInit(): void {
//     var carousels = document.getElementsByClassName('.carousel .carousel-item');
//     for (var i = 0, len = carousels.length; i < len; i++) {
//       let index = i;
//       let element = carousels[i];
//       var minPerSlide = 3;
//       var next = $(element).next();

//       if (!next.length) {
//         next = $(element).siblings(':first');
//       }

//       next.children(':first-child').clone().appendTo($(element));

//       for (var i = 0; i < minPerSlide; i++) {
//         next = next.next();

//         if (!next.length) {
//           next = $(element).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(element));
//       }
//   }
// }


openContactUs() {
  this.layoutService.setContactUsVisible(true);
}
}
