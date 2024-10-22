import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-rack-and-network',
  templateUrl: './rack-and-network.component.html',
  styleUrls: ['./rack-and-network.component.scss']
})
export class RackAndNetworkComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Rack and Stack Data Center Management & Designs ');
    this.utilsService.addMetaTag('og:title', 'Rack and Stack Data Center Management & Designs - Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Explore top-tier Data Center Server Hardware Monitoring Systems at Reboot Monkey. Elevate efficiency through real-time monitoring, temperature control, and strategic sensor placement. Rely on us for cutting-edge solutions, ensuring peak performance in your data center operations.');
    this.utilsService.addMetaTag('description', 'Explore top-tier Data Center Server Hardware Monitoring Systems at Reboot Monkey. Elevate efficiency through real-time monitoring, temperature control, and strategic sensor placement. Rely on us for cutting-edge solutions, ensuring peak performance in your data center operations.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Data Center Rack & Network Design services - Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'network rack setup, rack and network design services, design Rack & Network');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
