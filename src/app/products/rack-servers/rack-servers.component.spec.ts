import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RackServersComponent } from './rack-servers.component';

describe('RackServersComponent', () => {
  let component: RackServersComponent;
  let fixture: ComponentFixture<RackServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RackServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RackServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
