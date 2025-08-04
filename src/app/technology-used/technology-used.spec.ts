import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyUsed } from './technology-used';

describe('TechnologyUsed', () => {
  let component: TechnologyUsed;
  let fixture: ComponentFixture<TechnologyUsed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyUsed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyUsed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
