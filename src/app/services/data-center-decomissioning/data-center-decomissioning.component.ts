import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-data-center-decomissioning',
  templateUrl: './data-center-decomissioning.component.html',
  styleUrls: ['./data-center-decomissioning.component.scss']
})
export class DataCenterDecomissioningComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService
  ) { }
  
  ngOnInit(): void {
    this.utilsService.changeTitle('IT Data Center Decommissioning Data Center Services & Solution ');
    this.utilsService.addMetaTag('og:title', 'IT Data Center Decommissioning Data Center Services & Solution - Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Reboot Monkey: Your premier choice for IT Data Center Decommissioning Services & Solutions. We specialize in data center decommissioning, recycling, and asset management, providing a seamless server decommission process. Choose us for a reliable and efficient approach to retiring your data center infrastructure.');
    this.utilsService.addMetaTag('description', 'Reboot Monkey: Your premier choice for IT Data Center Decommissioning Services & Solutions. We specialize in data center decommissioning, recycling, and asset management, providing a seamless server decommission process. Choose us for a reliable and efficient approach to retiring your data center infrastructure.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', '');
    this.utilsService.addMetaTag('keywords', '');
    this.utilsService.addCanonicalLink();
  }
  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
