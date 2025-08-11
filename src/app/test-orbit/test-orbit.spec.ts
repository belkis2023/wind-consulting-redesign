import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOrbit } from './test-orbit';

describe('TestOrbit', () => {
  let component: TestOrbit;
  let fixture: ComponentFixture<TestOrbit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOrbit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOrbit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
