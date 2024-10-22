// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'rm-unique',
//   templateUrl: './unique.component.html',
//   styleUrls: ['./unique.component.scss']
// })
// export class UniqueComponent {
//   slidesPerView: number = 3;
//   constructor() { }


// }
import { Component, OnInit, HostListener } from '@angular/core';
import { interval } from 'rxjs';
// import Swiper from 'swiper';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'rm-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.scss']
})
export class UniqueComponent implements OnInit {

  customOptionsNew: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: true,
    navText: ['<img src="../../assets/chevron-left.webp" alt="services" />', '<img src="../../assets/chevron-right.webp" alt="services" />'], // Swap 'next' and 'prev' for left/right arrow order
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
  counterValue1: number = 0;
  counterValue2: number = 0;
  counterValue3: number = 0;
  slidesPerView: number = 3;
  slidesPerViewfour: number = 4;
  constructor() { }

  ngOnInit(): void {
    interval(10).subscribe(() => {
      if (this.counterValue1 < 300) {
          this.counterValue1++;
      }
      if (this.counterValue2 < 290) {
          this.counterValue2++;
      }
      if (this.counterValue3 < 440) {
          this.counterValue3++;
      }
  });
  this.updateSlidesPerView();
  this.updateSlidesPerViewfour();
  // const swiper = new Swiper('.mySwiper', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   }
  // });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateSlidesPerView();
    this.updateSlidesPerViewfour();
  }
  private updateSlidesPerView() {
    this.slidesPerView = window.innerWidth >= 768 ? 3 : 1;
  }
  private updateSlidesPerViewfour() {
    this.slidesPerViewfour = window.innerWidth >= 768 ? 4 : 2;
  }
}
