import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss']
})
export class NewHomeComponent implements OnInit {

  constructor(
    private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Smart Hands Data Center Management & Monitoring ');

    this.utilsService.addMetaTag('og:type', 'website');
    this.utilsService.addMetaTag('og:title', 'Smart Hands Data Center Management & Monitoring | Reboot Monkey');
    this.utilsService.addMetaTag('og:description', 'Optimize your data center with Reboot Monkey\'s Smart Hands Solutions – your trusted partner for IT Smart Hands services. Specializing in colocation data center setup, monitoring, and expert support, we ensure seamless operations tailored to your needs. Rely on us for efficient remote hand services.');
    this.utilsService.addMetaTag('description', 'Optimize your data center with Reboot Monkey\'s Smart Hands Solutions – your trusted partner for IT Smart Hands services. Specializing in colocation data center setup, monitoring, and expert support, we ensure seamless operations tailored to your needs. Rely on us for efficient remote hand services.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Smart Hands Data Center Management & Monitoring | Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'Smart Hands services, colocation data center set up, remote hand services, IT business solutions Amsterdam, Technology Consulting Services, Datacenter services, it consulting for small businesses');
    this.utilsService.addCanonicalLink();



  }

}
