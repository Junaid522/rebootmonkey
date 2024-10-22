import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-ip-transit',
  templateUrl: './ip-transit.component.html',
  styleUrls: ['./ip-transit.component.scss']
})
export class IpTransitComponent implements OnInit {

  searchFormGroup!: FormGroup;

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) {
    this.searchFormGroup = new FormGroup({
      query: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.utilsService.changeTitle('IP Transit Service Provider & Solution | Reboot Monkey');
    this.utilsService.addMetaTag('og:title', 'IP Transit Service Provider & Solution | Reboot Monkey');
    this.utilsService.addMetaTag('og:description' ,`Unlock seamless connectivity with Reboot Monkey's premier IP Transit solutions. As your trusted IP Transit Service Provider, we offer robust internet transit solutions tailored to your needs. Harness the power of our expansive IP transit network for unparalleled connectivity and reliability.`);
    this.utilsService.addMetaTag('description', `Unlock seamless connectivity with Reboot Monkey's premier IP Transit solutions. As your trusted IP Transit Service Provider, we offer robust internet transit solutions tailored to your needs. Harness the power of our expansive IP transit network for unparalleled connectivity and reliability.`);
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'IP Transit Service Provider & Solution | Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'IP Transit Service, ip transit, ip transit provider, internet transit, Ip transit network, Ip transit solution');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

  search() {
  }

}
