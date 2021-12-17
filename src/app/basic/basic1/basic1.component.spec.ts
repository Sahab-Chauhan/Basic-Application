import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Basic1Component } from './basic1.component';

describe('Basic1Component', () => {
  let component: Basic1Component;
  let fixture: ComponentFixture<Basic1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Basic1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Basic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
