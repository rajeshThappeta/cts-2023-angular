import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditDemo2Component } from './form-edit-demo2.component';

describe('FormEditDemo2Component', () => {
  let component: FormEditDemo2Component;
  let fixture: ComponentFixture<FormEditDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditDemo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
