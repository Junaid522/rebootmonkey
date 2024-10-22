import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ContactUsService } from 'src/app/_injectible-services/contact-us.service';
import { products } from 'src/app/_constants/products.const';
import { services } from 'src/app/_constants/services.const';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  services = services;
  products = products;
  environment = environment;

  newsletterForm!: FormGroup;

  constructor(
    private notification: NzNotificationService,
    private contactusService: ContactUsService,
  ) {
    this.newsletterForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  joinNewsletter(data: any){
    if (!this.getFormValidationErrors()) {
      data = { ...data };
      console.log(data);
      this.contactusService.joinNewsletter(data).subscribe(
        res => {
          this.notification.success(
            'Thanks !',
            `You joined the newsletter.`,
            { nzPlacement: 'bottom' }
          );
        }
      )
    }
  }

  
  getFormValidationErrors() {
    let hasErrors = false;
    Object.keys(this.newsletterForm.controls).forEach(key => {
      // @ts-ignore
      const controlErrors: ValidationErrors = this.newsletterForm.get(key).errors;
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

}
