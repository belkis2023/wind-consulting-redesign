import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, createComponent, Injector, EnvironmentInjector, Input } from '@angular/core';
import GlobeGl from 'globe.gl';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import { Marker } from '../../marker/marker/marker';
import { CountryGeoService } from '../../services/country-geo';
import { Location } from '../../models/location';


@Component({
  selector: 'app-globe',
  imports: [],
  templateUrl: './globe.html',
  styleUrl: './globe.css'
})
export class Globe implements AfterViewInit {

  @Input() locations: Location[] = [];

  @ViewChild('globeContainer') globeContainer!: ElementRef;
  @ViewChild('globeWrapper', { static: false }) globeWrapper!: ElementRef;

  // Store globe instance as class property
  private globeInstance: any;

  constructor(private renderer: Renderer2,
    private environmentInjector: EnvironmentInjector,
    private countryGeoService: CountryGeoService) { }

  async ngAfterViewInit() {
    //load the countries we need so we get accurate locations on map
    await this.countryGeoService.loadCountries();
    const world = await fetch('https://unpkg.com/world-atlas@2/countries-110m.json').then(res => res.json());
    const countries = topojson.feature(world, world.objects.countries) as any;

    const globe = new GlobeGl(this.globeContainer.nativeElement)
      .globeMaterial(new THREE.MeshStandardMaterial({ color: '#ffffff' })) // Sea white
      .polygonsData(countries.features)
      .polygonCapColor(() => '#cccccc')  // Gray land
      .polygonSideColor(() => '#cccccc')
      .polygonStrokeColor(() => 'transparent')
      .backgroundColor('#ffffff') // White sea
      .polygonAltitude(() => 0.003);  // Slightly elevated so land sits on top


    globe.scene().add(new THREE.AmbientLight(0xffffff, 0.7));
    globe.scene().add(new THREE.DirectionalLight(0xffffff, 0.6));
    const controls = globe.controls();
    controls.autoRotate = false;
    //controls.autoRotateSpeed = 0.3;
    controls.enableZoom = false;

    const tunisiaCentroid = this.countryGeoService.getCountryCentroidByName("Tunisia");
    console.log('Tunisia centroid:', tunisiaCentroid);

    if (globe) {
      this.renderMarkers(globe);
    } else {
      console.error('Globe instance is undefined!');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add scale-110, remove scale-100 (grow)
            this.renderer.removeClass(this.globeWrapper.nativeElement, 'scale-100');
            this.renderer.addClass(this.globeWrapper.nativeElement, 'scale-110');
          } else {
            // Add scale-100, remove scale-110 (shrink)
            this.renderer.removeClass(this.globeWrapper.nativeElement, 'scale-110');
            this.renderer.addClass(this.globeWrapper.nativeElement, 'scale-100');
          }
        });
      },
      { threshold: 0.5 }  // trigger when 50% visible
    );

    observer.observe(this.globeWrapper.nativeElement);
  }




  //adding locations
  renderMarkers(globeInstance: any) {
    globeInstance
      .htmlElementsData(this.locations)
      .htmlLat((d: Location) => d.lat)
      .htmlLng((d: Location) => d.lng)
      .htmlElement((d: Location) => this.createMarkerElement(d));
  }

  //creates a styled marker for a location 
  createMarkerElement(location: Location): HTMLElement {
    const componentRef = createComponent(Marker, {
      environmentInjector: this.environmentInjector
    });

    componentRef.setInput('name', location.name);
    componentRef.setInput('details', location.details);

    componentRef.changeDetectorRef.detectChanges();
    console.log(location.name);

    return componentRef.location.nativeElement;
  }


}
