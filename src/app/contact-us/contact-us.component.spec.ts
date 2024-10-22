import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports: [ NzNotificationModule, BrowserAnimationsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send empty data', () => {
    component.sendMessage({});
    fixture.detectChanges();
    expect(document.querySelectorAll('.ant-notification-notice')?.length).toEqual(4);
  });

  it('should not send wrong email format', () => {
    component.contactUsForm.get('email')?.setValue('wrongemailformal');
    component.sendMessage({
      email: 'wrongemailformal'
    });
    fixture.detectChanges();
    let hasWrongEmailFormat = false;
    document.querySelectorAll('.ant-notification-notice').forEach((el: any) => {
      if (el.innerText.indexOf('Invalid email format') > -1) {
        hasWrongEmailFormat = true;
      }
    });
    expect(hasWrongEmailFormat).toBeTrue();
  });

});
