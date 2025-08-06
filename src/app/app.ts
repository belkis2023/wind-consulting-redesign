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
import { ChiffresCles } from './chiffres-cles/chiffres-cles';
import { TechnologyUsed } from './technology-used/technology-used';
import { Recruitment } from './recruitment/recruitment';
import { News } from './news/news';
import { Footer } from './footer/footer';
import { Newsletter } from './newsletter/newsletter';
import { ButtonWithLabel } from './buttons/button-with-label/button-with-label';


@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    GenericTitle,
    ScrollSection,
    ClientsScrollbar,
    ChiffresCles,
    TechnologyUsed,
    Recruitment,
    News,
    Footer,
    Newsletter,
    ButtonWithLabel,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'wind-consulting-redesign';

  locations: Location[] = [];

  constructor(private locationProvider: LocationProvider) {}

  async ngOnInit() {
    window.scrollTo(0, 0);
    await this.locationProvider.init();
    this.locations = this.locationProvider.getLocations();
  }
}
