import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterMigrationComponent } from './data-center-migration.component';

describe('DataCenterMigrationComponent', () => {
  let component: DataCenterMigrationComponent;
  let fixture: ComponentFixture<DataCenterMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCenterMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCenterMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
