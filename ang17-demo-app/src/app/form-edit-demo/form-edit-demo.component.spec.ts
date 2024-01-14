import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditDemoComponent } from './form-edit-demo.component';

describe('FormEditDemoComponent', () => {
  let component: FormEditDemoComponent;
  let fixture: ComponentFixture<FormEditDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEditDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
