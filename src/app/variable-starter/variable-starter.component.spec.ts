import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableStarterComponent } from './variable-starter.component';

describe('VariableStarterComponent', () => {
  let component: VariableStarterComponent;
  let fixture: ComponentFixture<VariableStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableStarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
