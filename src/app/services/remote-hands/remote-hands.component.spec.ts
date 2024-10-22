import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteHandsComponent } from './remote-hands.component';

describe('RemoteHandsComponent', () => {
  let component: RemoteHandsComponent;
  let fixture: ComponentFixture<RemoteHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteHandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
