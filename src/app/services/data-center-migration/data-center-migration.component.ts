import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-data-center-migration',
  templateUrl: './data-center-migration.component.html',
  styleUrls: ['./data-center-migration.component.scss']
})
export class DataCenterMigrationComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService
  ) { }
  ngOnInit(): void {
    this.utilsService.changeTitle('IT Data Center Migration Services & Solution ');
    this.utilsService.addMetaTag('og:title', 'IT Data Center Migration Services & Solution - Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Reboot Monkey: Your partner for seamless IT Data Center Migration Services & Solutions. We excel in data migration, infrastructure migration, and offer cutting-edge solutions for a smooth transition. Trust us for expert cloud migration consulting services, ensuring a hassle-free and efficient migration journey.');
    this.utilsService.addMetaTag('description', 'Reboot Monkey: Your partner for seamless IT Data Center Migration Services & Solutions. We excel in data migration, infrastructure migration, and offer cutting-edge solutions for a smooth transition. Trust us for expert cloud migration consulting services, ensuring a hassle-free and efficient migration journey.');
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
