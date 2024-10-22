import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UtilsService } from '../_injectible-services/utils.service';
import { ContactUsService } from '../_injectible-services/contact-us.service';
import { environment } from 'src/environments/environment';
import { LayoutService } from '../_injectible-services/layout.service';
import { services } from '../_constants/services.const';
import { products } from '../_constants/products.const';

declare const intlTelInput: any;

@Component({
  selector: 'rm-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  @ViewChild('captchaRef') captcha!: ElementRef;
  @ViewChild('phone') phone!: ElementRef;
  @Input() embeded!: boolean;
  contactUsForm!: FormGroup;
  formData: any;
  phoneInput: any;
  services = services;
  products = products;

  token: string | undefined;

  theme: 'light' | 'dark' = 'light';
  size: 'normal' | 'compact' = 'normal';

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private contactUsService: ContactUsService,
    private layoutService: LayoutService,
    private utilsService: UtilsService
  ) {
    this.contactUsForm = new FormGroup({
      recaptchaReactive: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // companyEmail: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,11}$/)]),
      service: new FormControl('', [Validators.required]),
      // message: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    this.phoneInput = intlTelInput(this.phone.nativeElement, {
      utilsScript: "/assets/js/intl-tel-input_18.2.1_js_utils.js"
    });
  }

  ngOnInit(): void {
    if (!this.embeded) {
      this.utilsService.changeTitle('Contact Us');
      this.utilsService.addMetaTag('og:type', 'website');
      this.utilsService.addMetaTag('og:title', 'Contact Us - Reboot Monkey');
      this.utilsService.addMetaTag('og:description', 'Want to request a quote, get information about one of our products/ services, or want to meet up for coffee? Contact us by filling out the form.');
      this.utilsService.addMetaTag('description', 'Want to request a quote, get information about one of our products/ services, or want to meet up for coffee? Contact us by filling out the form.');
      this.utilsService.addMetaTag('twitter:image', '/assets/social-banner.webp');
      this.utilsService.addMetaTag('og:image', '/assets/social-banner.webp');
      this.utilsService.addMetaTag('og:site_name', environment.siteName);
      this.utilsService.addMetaTag('twitter:title', 'Contact Us - Reboot Monkey');
      this.utilsService.addCanonicalLink();
    }
  }

  sendMessage(data: any) {
    if (!this.getFormValidationErrors()) {
      data = { ...data };
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
    // const unwantedMailList = ["gmail", "hotmail"]
    // const isUnwanted = unwantedMailList.some(mail => this.contactUsForm.value.companyEmail.includes(mail))
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
            case 'pattern':
            this.notification.error('Error', `Invalid phone format`, {
              nzPlacement: 'bottom',
            });
            break;
          }
        });
      }
    });
    // if(isUnwanted){
    //   hasErrors = true
    //   this.notification.error(
    //     'Error',
    //     `Invalid company email format`,
    //     { nzPlacement: 'bottom' }
    //   );
    // }
    return hasErrors;
  }

  captchaResolved(e: any) {
    let captchaForm: any = this.contactUsForm.get('recaptchaReactive') || {};
    if (captchaForm['status'] === "INVALID") {
      this.notification.error(
        'Error',
        `Captcha not completed`,
        { nzPlacement: 'bottom' }
      );
      return true;
    }
    if (e) {
      console.log('Sending data')
      this.formData = {...this.contactUsForm.value}
      console.log(this.formData);
      this.formData.type = 'contact';
      const data = {...this.formData};
      data.referer = location.href;
      this.contactUsService.sendContactUs(data).subscribe(
        res => {
          this.contactUsForm.reset()
          this.notification.success(
            'Thanks !',
            `Message Sent !`,
            { nzPlacement: 'bottom' }
          );
          this.router.navigate(['/contact-us/thank-you']);
          this.layoutService.setContactUsVisible(false);
        },
        err => {
          // this.notification.error(
          //   'Error',
          //   `An error occured`,
          //   { nzPlacement: 'bottom' }
          // );
          this.contactUsForm.reset()
          this.notification.success(
            'Thanks !',
            `Message Sent !`,
            { nzPlacement: 'bottom' }
          );
          this.router.navigate(['/contact-us/thank-you']);
          this.layoutService.setContactUsVisible(false);
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
    return '';
  }


  sendData(data: any) {
    this.formData = {...data};
    this.formData.phone = `+${this.phoneInput.getSelectedCountryData().dialCode}-${data.phone}`;
    // @ts-ignore
    this.captcha.execute();
  }

}
