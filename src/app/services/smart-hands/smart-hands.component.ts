import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'rm-smart-hands',
  templateUrl: './smart-hands.component.html',
  styleUrls: ['./smart-hands.component.scss']
})
export class SmartHandsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Data Center Smart Hands IT Services & Support');
    this.utilsService.addMetaTag('og:title', 'Data Center Smart Hands IT Services & Support | Reboot Monkey');
    this.utilsService.addMetaTag('og:description' , 'Experience hassle-free IT support with Reboot Monkey`s Data Center IT Smart Hands services. Our skilled smart hands technician offer hands-on help for your technical needs, providing expert smart hands support and solutions. Count on us for remote assistance and personalized IT support that suits your requirements.');
    this.utilsService.addMetaTag('description', 'Experience hassle-free IT support with Reboot Monkey`s Data Center IT Smart Hands services. Our skilled smart hands technician offer hands-on help for your technical needs, providing expert smart hands support and solutions. Count on us for remote assistance and personalized IT support that suits your requirements.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Data Center Smart Hands IT Services & Support | Reboot Monkey');
    this.utilsService.addMetaTag('keywords', 'Smart Hands Support, Smart Hands Services, Smart Hands Data Center Services, Smart Hands Colocation Services, Smart Hands Support, Smart Hands and eyes, Smart Hands, Smart Hands Support Service, Smart Hands technicians, Smart Hands services');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
