import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilsService } from '../_injectible-services/utils.service';

@Component({
  selector: 'rm-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.utilsService.changeTitle(`About Us`);
    this.utilsService.addMetaTag('og:type', 'website');
    this.utilsService.addMetaTag('og:title', `About Us - ${environment.siteName}`);
    this.utilsService.addMetaTag('og:description', 'We are a team of IT professionals that have been in IT since 1996. We started and helped a lot of multiple IT companies, startups, and enterprises ');
    this.utilsService.addMetaTag('description', 'We are a team of IT professionals that have been in IT since 1996. We started and helped a lot of multiple IT companies, startups, and enterprises ');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', `About Us - ${environment.siteName}`);
    this.utilsService.addCanonicalLink();
  }

}
