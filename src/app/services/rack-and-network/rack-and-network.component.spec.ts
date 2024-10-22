import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackAndNetworkComponent } from './rack-and-network.component';

describe('RackAndNetworkComponent', () => {
  let component: RackAndNetworkComponent;
  let fixture: ComponentFixture<RackAndNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackAndNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackAndNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
