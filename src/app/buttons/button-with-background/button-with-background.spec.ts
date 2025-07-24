import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithBackground } from './button-with-background';

describe('ButtonWithBackground', () => {
  let component: ButtonWithBackground;
  let fixture: ComponentFixture<ButtonWithBackground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWithBackground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithBackground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
