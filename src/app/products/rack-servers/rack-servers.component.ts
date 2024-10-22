import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-rack-servers',
  templateUrl: './rack-servers.component.html',
  styleUrls: ['./rack-servers.component.scss']
})
export class RackServersComponent implements OnInit {

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
    this.utilsService.changeTitle('Reboot Monkey - Colocation Data Center Services Providers');
    this.utilsService.addMetaTag('og:title', 'Reboot Monkey - Colocation Data Center Services Providers');
    this.utilsService.addMetaTag('og:description' , 'Modernize your data center with Reboot Monkey rack-mounted Rack Servers. Check out the rack servers with built-in security & optimized workload performance');
    this.utilsService.addMetaTag('description', 'Modernize your data center with Reboot Monkey rack-mounted Rack Servers. Check out the rack servers with built-in security & optimized workload performance');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey - Colocation Data Center Services Providers');
    this.utilsService.addMetaTag('keywords', 'Colocation Data Center Services, Leading colocation provider, Dedicated Servers and Colocation Services, Data Center Colocation, colocation amsterdam, Colocation Providers, Global Data Center Colocation Services Provider, server colocation, data center colocation services, colocation solutions, colocation globally, colocation providers, colocation data center providers, colocation service providers');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

  search() {
  }

}
