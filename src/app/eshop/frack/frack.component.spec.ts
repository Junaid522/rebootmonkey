import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrackComponent } from './frack.component';

describe('FrackComponent', () => {
  let component: FrackComponent;
  let fixture: ComponentFixture<FrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
