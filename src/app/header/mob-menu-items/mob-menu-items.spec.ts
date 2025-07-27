import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobMenuItems } from './mob-menu-items';

describe('MobMenuItems', () => {
  let component: MobMenuItems;
  let fixture: ComponentFixture<MobMenuItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobMenuItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobMenuItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
