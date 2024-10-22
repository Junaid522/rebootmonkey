import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoParticlesComponent } from './logo-particles.component';

describe('LogoParticlesComponent', () => {
  let component: LogoParticlesComponent;
  let fixture: ComponentFixture<LogoParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoParticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
