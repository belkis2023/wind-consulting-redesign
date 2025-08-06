import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWrapper } from './line-wrapper';

describe('LineWrapper', () => {
  let component: LineWrapper;
  let fixture: ComponentFixture<LineWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
