import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableStarter2Component } from './variable-starter2.component';

describe('VariableStarter2Component', () => {
  let component: VariableStarter2Component;
  let fixture: ComponentFixture<VariableStarter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableStarter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableStarter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
