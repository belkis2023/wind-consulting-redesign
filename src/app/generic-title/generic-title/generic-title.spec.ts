import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTitle } from './generic-title';

describe('GenericTitle', () => {
  let component: GenericTitle;
  let fixture: ComponentFixture<GenericTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
