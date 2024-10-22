import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../shared/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Home');
    this.utilsService.addMetaTag('og:type', 'website');
    this.utilsService.addMetaTag('og:title', environment.siteName);
    this.utilsService.addMetaTag('og:description', 'Reboot Monkey. The one stop shop for your datacenter needs, Lifting your data center burden is our business.');
    this.utilsService.addMetaTag('description', 'Reboot Monkey. The one stop shop for your datacenter needs, Lifting your data center burden is our business.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', environment.siteName);
    this.utilsService.addCanonicalLink();
  }

}
