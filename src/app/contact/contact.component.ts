import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UtilsService } from '../_injectible-services/utils.service';
import { HttpClient } from '@angular/common/http';
import { services } from '../_constants/services.const';
import { products } from '../_constants/products.const';
import { ContactService } from 'src/app/_injectible-services/contact.service';
import { LayoutService } from '../_injectible-services/layout.service';

declare const intlTelInput: any;

@Component({
  selector: 'rm-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('captchaRef') captcha!: ElementRef;
  @ViewChild('phone') phone!: ElementRef;
  @Input() embeded!: boolean;
  contactUsForm!: FormGroup;
  formData: any;
  phoneInput: any;
  services = services;
  products = products;
  isCaptchaResolved: boolean = false;

  token: string | undefined;

  theme: 'light' | 'dark' = 'light';
  size: 'normal' | 'compact' = 'normal';

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private contactService: ContactService,
    private layoutService: LayoutService,
    private utilsService: UtilsService,
    private http: HttpClient
  ) {
    this.contactUsForm = new FormGroup({
      recaptchaReactive: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,11}$/)]),
      // service: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
    this.services= [
      {title: 'Smart Hands', link: 'smart-hands'},
      {title: 'Remote Hands', link: 'remote-hands'},
      {title: 'Data Destroying', link: 'data-destroying'},
      {title: 'Hardware Recycling', link: 'hardware-recycling'},
      {title: 'Hardware Monitoring', link: 'hardware-monitoring'},
      {title: 'Rack & Network Design', link: 'rack-and-network'},
      {title: 'Rack and Stack', link: 'rack-and-stack'},
      {title: 'Data Center Migration', link: 'data-center-migration'},
      {title: 'Data Center Decomissioning', link: 'data-center-decomissioning'},
      {title: 'Server Migration', link: 'server-migration'},
    ];
  }

  ngAfterViewInit(): void {
    this.phoneInput = intlTelInput(this.phone.nativeElement, {
      utilsScript: '/assets/js/intl-tel-input_18.2.1_js_utils.js',
    });
  }

  sendMessage( data: any) {
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
    Object.keys(this.contactUsForm.controls).forEach((key) => {
      // @ts-ignore
      const controlErrors: ValidationErrors =
        this.contactUsForm.get(key)?.errors;
      if (controlErrors != null) {
        hasErrors = true;
        Object.keys(controlErrors).forEach((keyError) => {
          switch (keyError) {
            case 'required':
              this.notification.error('Error', `${key} is required`, {
                nzPlacement: 'bottom',
              });
              break;
            case 'email':
              this.notification.error('Error', `Invalid email format`, {
                nzPlacement: 'bottom',
              });
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
    return hasErrors;
  }

  captchaResolved() {
    this.isCaptchaResolved = true;
    // let captchaForm: any = this.contactUsForm.get('recaptchaReactive') || {};
    // if (captchaForm['status'] === 'INVALID') {
    //   this.notification.error('Error', `Captcha not completed`, {
    //     nzPlacement: 'bottom',
    //   });
    //   return false;
    // }
    // return true;
  }

  submitData() {
    if (!this.getFormValidationErrors()) {
      if(!this.isCaptchaResolved) {
        this.notification.error('Error', `Captcha not completed`, {
          nzPlacement: 'bottom',
        });
        return
      }
      console.log('Sending data');
      this.formData = this.contactUsForm.value;
      this.formData.type = 'contact';
      this.formData.phone = `+${
        this.phoneInput.getSelectedCountryData().dialCode
      }-${this.formData.phone}`;
      console.log(this.formData);
      const data = { ...this.formData };
      data.referer = location.href;
      this.contactService.sendContactUs(data).subscribe(
        (res) => {
          // Object.keys(this.contactUsForm.controls).forEach((key) => {
          //   this.contactUsForm.get(key)?.setValue('');
          // });
         
        },
        (err) => {
          // this.notification.error('Error', `An error occured`, {
          //   nzPlacement: 'bottom',
          // });
          this.contactUsForm.reset();
          this.notification.success('Thanks !', `Message Sent !`, {
            nzPlacement: 'bottom',
          });
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
  }
    
   

  sendData(data: any) {
    this.formData = { ...data };
    this.formData.phone = `+${
      this.phoneInput.getSelectedCountryData().dialCode
    }-${data.phone}`;
    // @ts-ignore
    this.captcha.execute();
  }
}
