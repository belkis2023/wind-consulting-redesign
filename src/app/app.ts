import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Hero } from "./hero/hero";
import { GenericTitle } from "./generic-title/generic-title/generic-title";
import { LocationProvider } from './services/location-provider/location-provider';
import { Location } from './models/location';
import { ProjectsSection } from "./projects-section/projects-section";
import { ScrollSection } from "./scroll-section/scroll-section";
import { ClientsScrollbar } from "./clients-scrollbar/clients-scrollbar";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, GenericTitle, ScrollSection, ClientsScrollbar],
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
