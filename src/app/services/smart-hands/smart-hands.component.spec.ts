import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHandsComponent } from './smart-hands.component';

describe('SmartHandsComponent', () => {
  let component: SmartHandsComponent;
  let fixture: ComponentFixture<SmartHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartHandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
