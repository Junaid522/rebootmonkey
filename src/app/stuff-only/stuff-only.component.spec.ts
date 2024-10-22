import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffOnlyComponent } from './stuff-only.component';

describe('StuffOnlyComponent', () => {
  let component: StuffOnlyComponent;
  let fixture: ComponentFixture<StuffOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
