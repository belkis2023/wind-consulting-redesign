import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitTechnology } from './orbit-technology';

describe('OrbitTechnology', () => {
  let component: OrbitTechnology;
  let fixture: ComponentFixture<OrbitTechnology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitTechnology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbitTechnology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
