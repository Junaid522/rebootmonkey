import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'rm-remote-hands',
  templateUrl: './remote-hands.component.html',
  styleUrls: ['./remote-hands.component.scss']
})
export class RemoteHandsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Remote Hands Services for Data Centers');
    this.utilsService.addMetaTag('og:title', 'Remote Hands Services for Data Centers - Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Reboot Monkey colocation remote hands service helps you to resolve emergencies and handle technical tasks at data center 24/7. Contact us for more info.');
    this.utilsService.addMetaTag('description', 'Reboot Monkey colocation remote hands service helps you to resolve emergencies and handle technical tasks at data center 24/7. Contact us for more info.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Remote Hands Services for Data Centers - Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'Remote Hands Data Center Services, Remote Hand Colocation Services, Remote Hands Support, Remote Hands and eyes, Remote Hands, Remote Hands Support Service, Remote Hands technicians, Remote Hands services');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
