import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackAndStackComponent } from './rack-and-stack.component';

describe('RackAndStackComponent', () => {
  let component: RackAndStackComponent;
  let fixture: ComponentFixture<RackAndStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackAndStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackAndStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
