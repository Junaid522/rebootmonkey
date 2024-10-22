import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-hardware-recycling',
  templateUrl: './hardware-recycling.component.html',
  styleUrls: ['./hardware-recycling.component.scss']
})
export class HardwareRecyclingComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('IT Hardware Recycling & Data Waste Management');
    this.utilsService.addMetaTag('og:title', 'IT Hardware Recycling & Data Waste Management - Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Reboot Monkey: Your go-to for eco-friendly IT hardware recycling and secure data waste management. We specialize in responsibly handling IT equipment recycling. Choose us for a greener future!');
    this.utilsService.addMetaTag('description', 'Reboot Monkey: Your go-to for eco-friendly IT hardware recycling and secure data waste management. We specialize in responsibly handling IT equipment recycling. Choose us for a greener future!');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'IT Hardware Recycling Company - Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'hardware recycling near me, IT hardware recycling, Hardware Recycling Company Amsterdam, Hardware Recycling');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
