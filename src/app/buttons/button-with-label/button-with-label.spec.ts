import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithLabel } from './button-with-label';

describe('ButtonWithLabel', () => {
  let component: ButtonWithLabel;
  let fixture: ComponentFixture<ButtonWithLabel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithLabel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
