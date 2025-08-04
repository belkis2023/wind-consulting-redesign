import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCircularCut } from './card-circular-cut';

describe('CardCircularCut', () => {
  let component: CardCircularCut;
  let fixture: ComponentFixture<CardCircularCut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCircularCut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCircularCut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
