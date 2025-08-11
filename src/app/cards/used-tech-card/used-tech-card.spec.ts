import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTechCard } from './used-tech-card';

describe('UsedTechCard', () => {
  let component: UsedTechCard;
  let fixture: ComponentFixture<UsedTechCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedTechCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedTechCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
