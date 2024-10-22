import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareRecyclingComponent } from './hardware-recycling.component';

describe('HardwareRecyclingComponent', () => {
  let component: HardwareRecyclingComponent;
  let fixture: ComponentFixture<HardwareRecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareRecyclingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareRecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
