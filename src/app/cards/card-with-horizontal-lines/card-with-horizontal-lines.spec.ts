import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithHorizontalLines } from './card-with-horizontal-lines';

describe('CardWithHorizontalLines', () => {
  let component: CardWithHorizontalLines;
  let fixture: ComponentFixture<CardWithHorizontalLines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWithHorizontalLines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWithHorizontalLines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
