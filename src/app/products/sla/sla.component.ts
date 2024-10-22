import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss']
})
export class SlaComponent implements OnInit {


  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) {
  }

  ngOnInit(): void {
    this.utilsService.changeTitle('Data Center Service Level Agreement & Management | Reboot Monkey');
    this.utilsService.addMetaTag('og:title', 'Data Center Service Level Agreement & Management | Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , `At Reboot Monkey, we're committed to making sure your data center runs smoothly. Our Service Level Agreement management ensures that we deliver on our promises. Whether it's colocation agreements or keeping your IT services in top shape, we've got you covered. Trust us for hassle-free project management and reliable data center hosting services.`);
    this.utilsService.addMetaTag('description', `At Reboot Monkey, we're committed to making sure your data center runs smoothly. Our Service Level Agreement management ensures that we deliver on our promises. Whether it's colocation agreements or keeping your IT services in top shape, we've got you covered. Trust us for hassle-free project management and reliable data center hosting services.`);
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Service Level Agreement (SLA) - Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'Data Center Service Level Agreement, colocation agreement, data center SLA, it service level agreement, project management service level agreement, data center hosting services');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
