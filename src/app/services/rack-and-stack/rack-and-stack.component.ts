import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-rack-and-stack',
  templateUrl: './rack-and-stack.component.html',
  styleUrls: ['./rack-and-stack.component.scss']
})
export class RackAndStackComponent implements OnInit {

  constructor(
      private utilsService: UtilsService,
      private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Data Center Rack and Stack Storage Services');
    this.utilsService.addMetaTag('og:title', 'Reboot Monkey - Data Center Rack and Stack Storage Services');
    this.utilsService.addMetaTag('og:description' , 'Save resources to set up your servers, thanks to our professional server rack design and installation service. We offer a full range of data rack services');
    this.utilsService.addMetaTag('description', 'Save resources to set up your servers, thanks to our professional server rack design and installation service. We offer a full range of data rack services');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey - Data Center Rack and Stack Storage Services');
    this.utilsService.addMetaTag('keywords', 'Rack and Stack Services, Rack and Stack Storage Services, Server Rack Installation, Rack & Stack Services for Data Centers, Rack & Stack integration services, Rack & Stack Installation Services, Rack Server installation, Server Racks, rack servers, Rack Installation');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
