import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-hardware-monitoring',
  templateUrl: './hardware-monitoring.component.html',
  styleUrls: ['./hardware-monitoring.component.scss']
})
export class HardwareMonitoringComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService,
    ) { }

  ngOnInit(): void {
    this.utilsService.changeTitle('Data Center Server Hardware Monitoring System');
    this.utilsService.addMetaTag('og:title', 'Data Center Server Hardware Monitoring System');
    this.utilsService.addMetaTag('og:description' , 'Reboot Monkey: Your trusted source for advanced Data Center Server Hardware Monitoring Systems. Elevate efficiency with real-time monitoring, temperature control, and strategic sensor placement. Rely on us for cutting-edge hardware monitoring solutions, temperature Sensor Placement, ensuring peak performance in your data center operations. ');
    this.utilsService.addMetaTag('description', 'Reboot Monkey: Your trusted source for advanced Data Center Server Hardware Monitoring Systems. Elevate efficiency with real-time monitoring, temperature control, and strategic sensor placement. Rely on us for cutting-edge hardware monitoring solutions, temperature Sensor Placement, ensuring peak performance in your data center operations. ');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey Hardware Monitoring for Data Centers');
    this.utilsService.addMetaTag('keywords', 'Server Hardware Monitoring, Hardware monitoring service, Hardware Monitoring, hardware related services');
    this.utilsService.addCanonicalLink();
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
