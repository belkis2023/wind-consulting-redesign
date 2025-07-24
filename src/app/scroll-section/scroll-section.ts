import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProjectsSection } from "../projects-section/projects-section";
import { Globe } from "../globe/globe/globe";
import { Location } from '../models/location';
import { LocationProvider } from '../services/location-provider/location-provider';
import { NgClass } from '@angular/common';
import { ObserveIntersection } from '../directives/observe-intersection';

@Component({
  selector: 'app-scroll-section',
  imports: [ProjectsSection, Globe, NgClass, ObserveIntersection],
  templateUrl: './scroll-section.html',
  styleUrl: './scroll-section.css'
})


export class ScrollSection {
  locations: Location[] = [];
  constructor(private locationProvider: LocationProvider) { }

  async ngOnInit() {
    await this.locationProvider.init();
    this.locations = this.locationProvider.getLocations();
  }

  @ViewChild('observerTrigger', { static: true }) triggerElement!: ElementRef;

  projectsVisible = false;
  globeScaled = false;


}





