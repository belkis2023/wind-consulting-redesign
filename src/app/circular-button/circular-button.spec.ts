import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularButton } from './circular-button';

describe('CircularButton', () => {
  let component: CircularButton;
  let fixture: ComponentFixture<CircularButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
