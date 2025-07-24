import { TestBed } from '@angular/core/testing';

import { CountryGeo } from '../country-geo';

describe('CountryGeo', () => {
  let service: CountryGeo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryGeo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
