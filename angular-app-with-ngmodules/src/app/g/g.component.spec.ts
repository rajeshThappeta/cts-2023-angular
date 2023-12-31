import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GComponent } from './g.component';

describe('GComponent', () => {
  let component: GComponent;
  let fixture: ComponentFixture<GComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
