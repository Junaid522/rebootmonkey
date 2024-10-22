import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-colocation',
  templateUrl: './colocation.component.html',
  styleUrls: ['./colocation.component.scss']
})
export class ColocationComponent implements OnInit {

  constructor(
    private layoutService: LayoutService,
    private utilsService: UtilsService,
    
  ) { }
  
  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }
  ngOnInit(): void {
    this.utilsService.changeTitle('Colocation Data Center Services & Management | Reboot Monkey');
    this.utilsService.addMetaTag('og:title', 'Colocation Data Center Services & Management | Reboot Monkey');
    this.utilsService.addMetaTag('og:description' ,`Get Reboot Monkey's cutting-edge colocation data center solutions. Benefit from our expert Colocation Management of data center, ensuring performance and reliability. Count on us for all your data center server room requirements, including colocation hosting and professional colocation management`);
    this.utilsService.addMetaTag('description', `Get Reboot Monkey's cutting-edge colocation data center solutions. Benefit from our expert Colocation Management of data center, ensuring performance and reliability. Count on us for all your data center server room requirements, including colocation hosting and professional colocation management`);
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'IP Transit Service Provider & Solution | Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'Colocation Data Center, data center server room, colocated data center, data center space, server colocation services, Data Center Management, data center server room, Colocation Management, colocation hosting server, colocation services, data center colocation services, colocation data center providers');
    this.utilsService.addCanonicalLink();
  }
}
