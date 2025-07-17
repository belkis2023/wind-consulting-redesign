import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Hero } from "./hero/hero";
import { Globe } from "./globe/globe/globe";
import { GenericTitle } from "./generic-title/generic-title/generic-title";
import { LocationProvider } from './services/location-provider';
import { Location } from './models/location';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Globe, GenericTitle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'wind-consulting-redesign';

  locations: Location[] = [];

  constructor(private locationProvider: LocationProvider) { }

  async ngOnInit() {
    window.scrollTo(0, 0);
    await this.locationProvider.init();
    this.locations = this.locationProvider.getLocations();
  }


}
