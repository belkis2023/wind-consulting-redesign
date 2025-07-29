import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPagination } from './scroll-pagination';

describe('ScrollPagination', () => {
  let component: ScrollPagination;
  let fixture: ComponentFixture<ScrollPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollPagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollPagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
