import { Injectable } from '@angular/core';
import * as topojson from 'topojson-client';
import * as d3 from 'd3-geo';
import { Location } from '../models/location';


@Injectable({
  providedIn: 'root',
})
export class CountryGeoService {
  private countries: any[] = [];

  constructor() { }

  async loadCountries(): Promise<void> {
    const world = await fetch('https://unpkg.com/world-atlas@2/countries-110m.json').then(res => res.json());
    const countriesGeo = topojson.feature(world, world.objects.countries) as any;
    this.countries = countriesGeo.features;
  }

  getCountryCentroidById(id: string): [number, number] | null {
    const country = this.countries.find(c => c.id === id);
    return country ? d3.geoCentroid(country) : null;
  }

  getCountryCentroidByName(name: string): [number, number] | null {
    const country = this.countries.find(c => c.properties?.name?.toLowerCase() === name.toLowerCase());
    return country ? d3.geoCentroid(country) : null;
  }

  getCountryLocationByName(name: string, details: string = ''): Location | null {
    const centroid = this.getCountryCentroidByName(name);
    if (centroid) {
      return {
        lat: centroid[1],
        lng: centroid[0],
        name,
        details
      };
    }
    return null;
  }
}
