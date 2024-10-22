import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UtilsService } from '../_injectible-services/utils.service';
import { GetQuoteService } from '../_injectible-services/get-quote.service';
import { environment } from 'src/environments/environment';
import { LayoutService } from '../_injectible-services/layout.service';

@Component({
  selector: 'rm-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {
  contactUsForm!: FormGroup;

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private getQuoteService: GetQuoteService,
    private utilsService: UtilsService,
    private layoutService: LayoutService,
  ) {
    this.contactUsForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.utilsService.changeTitle('Reboot Monkey | Get A Quote');
    this.utilsService.addMetaTag('og:type', 'website');
    this.utilsService.addMetaTag('og:title', 'Reboot Monkey | Get A Quote');
    this.utilsService.addMetaTag('og:description', 'We need an experienced and skilled hand with custom IT projects.');
    this.utilsService.addMetaTag('description', 'We need an experienced and skilled hand with custom IT projects.');
    this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
    this.utilsService.addMetaTag('og:site_name', environment.siteName);
    this.utilsService.addMetaTag('twitter:title', 'Reboot Monkey | Get A Quote');
    this.utilsService.addCanonicalLink();
    
    setTimeout(() => {
      let chatScript = document.createElement("script");
      chatScript.type = "text/javascript";
      chatScript.async = true;
      chatScript.src = "https://webforms.pipedrive.com/f/loader";
      // @ts-ignore
      document.querySelector('.pipedriveWebForms').appendChild(chatScript);
    }, 100)
  }

  openContactUs() {
    this.layoutService.setContactUsVisible(true);
  }

  sendMessage(data: any) {
    if (!this.getFormValidationErrors()) {
      data = {...data};
      console.log(data);
      // this.sendData({
      //   "entry.1803878745": encodeURIComponent(data.name).replace(/%20/g, '+'),
      //   "entry.1358908667": encodeURIComponent(data.email).replace(/%20/g, '+'),
      //   "entry.1568347389": encodeURIComponent(data.phone).replace(/%20/g, '+'),
      //   "entry.1371042969": encodeURIComponent(data.message).replace(/%20/g, '+'),
      //   submit: 'Submit'
      // });
      this.sendData(data);
    }
  }

  getFormValidationErrors() {
    let hasErrors = false;
    Object.keys(this.contactUsForm.controls).forEach(key => {
      // @ts-ignore
      const controlErrors: ValidationErrors = this.contactUsForm.get(key).errors;
      if (controlErrors != null) {
        hasErrors = true;
        Object.keys(controlErrors).forEach(keyError => {
          switch (keyError) {
            case 'required':
              this.notification.error(
                'Error',
                `${key} is required`,
                { nzPlacement: 'bottom' }
              );
              break;
            case 'email':
              this.notification.error(
                'Error',
                `Invalid email format`,
                { nzPlacement: 'bottom' }
              );
              break;
          }
        });
      }
    });
    return hasErrors;
  }

  
  sendData(data: any) {
    console.log('Sending data');
    console.log(data);
    data.type = 'quote';
    this.getQuoteService.sendQuote(data).subscribe(
      res => {
        this.notification.success(
          'Thanks !',
          `Message Sent !`,
          { nzPlacement: 'bottom' }
        );
      },
      err => {
        this.notification.error(
          'Error',
          `An error occured`,
          { nzPlacement: 'bottom' }
        );
      }
    );
    // const XHR = new XMLHttpRequest();

    // let params: any = [];
  
    // for (let key in data) {
    //   if (data[key]) {
    //     params.push(`${key}=${data[key]}`);
    //   }
    // }

    // params = params.join('&');
    
    // XHR.addEventListener('load', (event) => {
    //   this.notification.success(
    //     'Sent !',
    //     `Your message was sent and we will reply as soon as possible, Thanks for contacting us !`,
    //     { nzPlacement: 'bottom' }
    //   );
    //   this.router.navigate(['/']);
    // });
  
    // XHR.addEventListener('error', (event) => {
    //   console.log(event);
    //   this.notification.success(
    //     'Sent !',
    //     `Your message was sent and we will reply as soon as possible, Thanks for contacting us !`,
    //     { nzPlacement: 'bottom' }
    //   );
    //   this.router.navigate(['/']);
    // });
      

    // XHR.open('GET', 'https://docs.google.com/forms/d/e/1FAIpQLSdrePw7nVyr0osajpLJp5ECZgJnj5sAHj4RqPzEZ44HMEI2uQ/formResponse?'+params);
  
    // XHR.send(null);
  }

}
