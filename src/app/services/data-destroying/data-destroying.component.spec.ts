import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDestroyingComponent } from './data-destroying.component';

describe('DataDestroyingComponent', () => {
  let component: DataDestroyingComponent;
  let fixture: ComponentFixture<DataDestroyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDestroyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDestroyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
