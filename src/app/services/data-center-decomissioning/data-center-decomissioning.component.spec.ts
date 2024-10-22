import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterDecomissioningComponent } from './data-center-decomissioning.component';

describe('DataCenterDecomissioningComponent', () => {
  let component: DataCenterDecomissioningComponent;
  let fixture: ComponentFixture<DataCenterDecomissioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCenterDecomissioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCenterDecomissioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
