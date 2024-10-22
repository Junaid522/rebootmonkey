import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { UtilsService } from 'src/app/_injectible-services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  searchFormGroup!: FormGroup;

  faqs = [
    {
      question: 'Is there a free trail available?',
      open: true,
      answer: `Depending on your budget and needs, you may either utilise a proactive or reactive approach with Smart Hands. The main difference is that with proactive Smart Hands, a technical team actively monitors your equipment and fixes minor issues as early as possible to prevent delay. 

      With reactive Smart Hands, problems with the equipment must be reported before a technician acts on the issue. 
      
      The proactive approach is more efficient for businesses which heavily depend on reliable server up-times.`
    },
    {
      question: 'Can i change my plan later?',
      open: false,
      answer: `Depending on your budget and needs, you may either utilise a proactive or reactive approach with Smart Hands. The main difference is that with proactive Smart Hands, a technical team actively monitors your equipment and fixes minor issues as early as possible to prevent delay. 

      With reactive Smart Hands, problems with the equipment must be reported before a technician acts on the issue. 
      
      The proactive approach is more efficient for businesses which heavily depend on reliable server up-times.`
    },
    {
      question: 'Is there a free trail available?',
      open: false,
      answer: `Depending on your budget and needs, you may either utilise a proactive or reactive approach with Smart Hands. The main difference is that with proactive Smart Hands, a technical team actively monitors your equipment and fixes minor issues as early as possible to prevent delay. 

      With reactive Smart Hands, problems with the equipment must be reported before a technician acts on the issue. 
      
      The proactive approach is more efficient for businesses which heavily depend on reliable server up-times.`
    },
    {
      question: 'What is your cancellation policy?',
      open: false,
      answer: `Depending on your budget and needs, you may either utilise a proactive or reactive approach with Smart Hands. The main difference is that with proactive Smart Hands, a technical team actively monitors your equipment and fixes minor issues as early as possible to prevent delay. 

      With reactive Smart Hands, problems with the equipment must be reported before a technician acts on the issue. 
      
      The proactive approach is more efficient for businesses which heavily depend on reliable server up-times.`
    },
    {
      question: 'How do i change my email?',
      open: false,
      answer: `Depending on your budget and needs, you may either utilise a proactive or reactive approach with Smart Hands. The main difference is that with proactive Smart Hands, a technical team actively monitors your equipment and fixes minor issues as early as possible to prevent delay. 

      With reactive Smart Hands, problems with the equipment must be reported before a technician acts on the issue. 
      
      The proactive approach is more efficient for businesses which heavily depend on reliable server up-times.`
    },
    {
      question: 'How does billing work?',
      open: false,
      answer: `Depending on your budget and needs, you may either utilise a proactive or reactive approach with Smart Hands. The main difference is that with proactive Smart Hands, a technical team actively monitors your equipment and fixes minor issues as early as possible to prevent delay. 

      With reactive Smart Hands, problems with the equipment must be reported before a technician acts on the issue. 
      
      The proactive approach is more efficient for businesses which heavily depend on reliable server up-times.`
    },
  ];

  constructor(
    private utilsService: UtilsService,
    private layoutService: LayoutService) {
    this.searchFormGroup = new FormGroup({
      query: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.utilsService.changeTitle('FAQ');
    this.utilsService.addMetaTag('og:type', 'website');
    this.utilsService.addMetaTag('og:title', 'Reboot Monkey | FAQ');
    this.utilsService.addMetaTag('og:description', 'Frequently asked questions. Do you have any questions? We’re here to help.');
    this.utilsService.addMetaTag('description', 'Frequently asked questions. Do you have any questions? We’re here to help.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey | FAQ');
    this.utilsService.addCanonicalLink();
  }

  search() {
    alert('Searching ...')
  }

  expand(faq: any) {
    faq.open = !faq.open;
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

}
