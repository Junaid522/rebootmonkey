import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProductSectionComponent } from './shared-product-section.component';

describe('SharedProductSectionComponent', () => {
  let component: SharedProductSectionComponent;
  let fixture: ComponentFixture<SharedProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedProductSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
