import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { environment } from 'src/environments/environment';

// import Hotjar from '@hotjar/browser';
// const siteId = 3725171;
// const hotjarVersion = 6;
// declare var $: any;

@Component({
  selector: 'rm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = environment.siteName;
  stuffPassword = localStorage.getItem('stuffPassword');
  currentStuffPassword = environment.stuffPassword;
  showPopup: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Hotjar.init(siteId, hotjarVersion);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.showPopup = true;
      }, 5000);
    }
  }

  close() {
    this.showPopup = false;
  }
  // ngAfterViewInit(): void {
  //   // Example: Execute some jQuery code after the view has been initialized
  //   $(document).ready(() => {
  //     // Your jQuery code here
  //   });
  // }
}
