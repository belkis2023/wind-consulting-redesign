import { Injectable } from '@angular/core';
import { CountryGeoService } from '../country-geo/country-geo';
import { Location } from '../../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationProvider {

  locations: Location[] = [];
  constructor(private geoService: CountryGeoService) { }

  async init() {
    await this.geoService.loadCountries();

    // add your locations
    const tunisia = this.geoService.getCountryLocationByName('Tunisia', 'Main Office');
    const france = this.geoService.getCountryLocationByName('France', 'European HQ');

    this.locations = [tunisia, france].filter(Boolean) as Location[];
  }

  getLocations(): Location[] {
    return this.locations;
  }

}
