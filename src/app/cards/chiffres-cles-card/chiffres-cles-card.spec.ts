import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresClesCard } from './chiffres-cles-card';

describe('ChiffresClesCard', () => {
  let component: ChiffresClesCard;
  let fixture: ComponentFixture<ChiffresClesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiffresClesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiffresClesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
