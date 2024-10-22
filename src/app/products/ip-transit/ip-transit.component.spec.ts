import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTransitComponent } from './ip-transit.component';

describe('IpTransitComponent', () => {
  let component: IpTransitComponent;
  let fixture: ComponentFixture<IpTransitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpTransitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
