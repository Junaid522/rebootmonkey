import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-server-migration',
  templateUrl: './server-migration.component.html',
  styleUrls: ['./server-migration.component.scss']
})
export class ServerMigrationComponent implements OnInit{

  constructor(
    private layoutService: LayoutService,
    private utilsService: UtilsService
  ) { }
  ngOnInit(): void {
    this.utilsService.changeTitle('Get Server Data Migration Service & Solutions | Reboot Monkey');
    this.utilsService.addMetaTag('og:title', 'Get Server Data Migration Service & Solutions | Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , `Move your servers hassle-free with Reboot Monkey's expert Server Data Migration Service. Our seamless process ensures smooth transitions, backed by reliable support. From planning to execution, trust us for efficient server relocation and data migration solutions tailored to your needs.`);
    this.utilsService.addMetaTag('description', `Move your servers hassle-free with Reboot Monkey's expert Server Data Migration Service. Our seamless process ensures smooth transitions, backed by reliable support. From planning to execution, trust us for efficient server relocation and data migration solutions tailored to your needs.`);
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', '');
    this.utilsService.addMetaTag('keywords', 'server migration service, server migration support, server migration, server migration process, server migration solutions, server relocation service, data migration service');
    this.utilsService.addCanonicalLink();
  }
  
  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
