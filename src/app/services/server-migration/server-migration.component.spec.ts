import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerMigrationComponent } from './server-migration.component';

describe('ServerMigrationComponent', () => {
  let component: ServerMigrationComponent;
  let fixture: ComponentFixture<ServerMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
