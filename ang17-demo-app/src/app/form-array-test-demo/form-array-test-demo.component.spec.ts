import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayTestDemoComponent } from './form-array-test-demo.component';

describe('FormArrayTestDemoComponent', () => {
  let component: FormArrayTestDemoComponent;
  let fixture: ComponentFixture<FormArrayTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormArrayTestDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormArrayTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
