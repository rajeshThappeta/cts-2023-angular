import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditDemo3Component } from './form-edit-demo3.component';

describe('FormEditDemo3Component', () => {
  let component: FormEditDemo3Component;
  let fixture: ComponentFixture<FormEditDemo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditDemo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
