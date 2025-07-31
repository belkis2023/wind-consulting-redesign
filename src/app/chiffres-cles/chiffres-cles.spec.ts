import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresCles } from './chiffres-cles';

describe('ChiffresCles', () => {
  let component: ChiffresCles;
  let fixture: ComponentFixture<ChiffresCles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiffresCles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiffresCles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
