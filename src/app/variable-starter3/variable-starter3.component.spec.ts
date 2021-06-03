import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableStarter3Component } from './variable-starter3.component';

describe('VariableStarter3Component', () => {
  let component: VariableStarter3Component;
  let fixture: ComponentFixture<VariableStarter3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableStarter3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableStarter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
