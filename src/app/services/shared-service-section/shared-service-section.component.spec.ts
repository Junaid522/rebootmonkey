import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedServiceSectionComponent } from './shared-service-section.component';

describe('SharedServiceSectionComponent', () => {
  let component: SharedServiceSectionComponent;
  let fixture: ComponentFixture<SharedServiceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedServiceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
