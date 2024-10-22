import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
      private utilsService: UtilsService,
      private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Reboot Monkey - Colocation Data Center Services Providers');
    this.utilsService.addMetaTag('og:title', 'Reboot Monkey - Colocation Data Center Services Providers');
    this.utilsService.addMetaTag('og:description' , 'Modernize your data center with Reboot Monkey rack-mounted Rack Servers. Check out the rack servers with built-in security & optimized workload performance');
    this.utilsService.addMetaTag('description', 'Modernize your data center with Reboot Monkey rack-mounted Rack Servers. Check out the rack servers with built-in security & optimized workload performance');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey - Colocation Data Center Services Providers');
    this.utilsService.addMetaTag('keywords', 'Colocation Data Center Services, Leading colocation provider, Dedicated Servers and Colocation Services, Data Center Colocation, colocation amsterdam, Colocation Providers, Global Data Center Colocation Services Provider, server colocation, data center colocation services, colocation solutions, colocation globally, colocation providers, colocation data center providers, colocation service providers');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
