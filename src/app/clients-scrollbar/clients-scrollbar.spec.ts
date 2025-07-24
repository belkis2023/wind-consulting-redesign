import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsScrollbar } from './clients-scrollbar';

describe('ClientsScrollbar', () => {
  let component: ClientsScrollbar;
  let fixture: ComponentFixture<ClientsScrollbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsScrollbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsScrollbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
