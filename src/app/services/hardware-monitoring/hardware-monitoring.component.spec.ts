import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareMonitoringComponent } from './hardware-monitoring.component';

describe('HardwareMonitoringComponent', () => {
  let component: HardwareMonitoringComponent;
  let fixture: ComponentFixture<HardwareMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareMonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
