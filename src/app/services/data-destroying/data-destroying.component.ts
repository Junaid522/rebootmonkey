import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-data-destroying',
  templateUrl: './data-destroying.component.html',
  styleUrls: ['./data-destroying.component.scss']
})
export class DataDestroyingComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Hard Drive Data Destruction Services & Solutions');
    this.utilsService.addMetaTag('og:title', 'Hard Drive Data Destruction Services & Solutions | Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Explore top-tier Hard Drive Data Destruction Services at Reboot Monkey. Our certified team ensures secure electronic data destruction through on-site methods and hard drive shredding services. Trust us for certified data destruction solutions. and secure hard drive disposal services');
    this.utilsService.addMetaTag('description', 'Explore top-tier Hard Drive Data Destruction Services at Reboot Monkey. Our certified team ensures secure electronic data destruction through on-site methods and hard drive shredding services. Trust us for certified data destruction solutions. and secure hard drive disposal services');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Hard Drive Data Destruction Services & Solutions | Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'Data destruction services, hdd destruction, ssd destruction, hard drive shredding, data erasure, Data erasure services, Digital Data Destroying');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
