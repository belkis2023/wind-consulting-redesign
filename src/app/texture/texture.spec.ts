import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Texture } from './texture';

describe('Texture', () => {
  let component: Texture;
  let fixture: ComponentFixture<Texture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Texture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Texture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
