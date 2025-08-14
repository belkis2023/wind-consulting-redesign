import {
  AfterViewInit,
  Component,
  createComponent,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import GlobeGl from 'globe.gl';
import * as THREE from 'three';
import * as topojson from 'topojson-client';
import { Marker } from '../../marker/marker/marker';
import { CountryGeoService } from '../../services/country-geo/country-geo';
import { Location } from '../../models/location';

@Component({
  selector: 'app-globe',
  imports: [],
  templateUrl: './globe.html',
  styleUrl: './globe.css',
})
export class Globe implements AfterViewInit {
  @Input() locations: Location[] = [];

  @ViewChild('globeContainer') globeContainer!: ElementRef;

  // we store globe instance as class property
  private globeInstance: any;

  constructor(
    private renderer: Renderer2,
    private environmentInjector: EnvironmentInjector,
    private countryGeoService: CountryGeoService,
  ) {}

  async ngAfterViewInit() {
    //load the countries we need so we get accurate locations on map
    await this.countryGeoService.loadCountries();
    const world = await fetch(
      'https://unpkg.com/world-atlas@2/countries-110m.json',
    ).then((res) => res.json());
    const countries = topojson.feature(world, world.objects.countries) as any;

    const globe = new GlobeGl(this.globeContainer.nativeElement)
      .globeMaterial(new THREE.MeshStandardMaterial({ color: '#ffffff' })) // Sea white
      .polygonsData(countries.features)
      .polygonCapColor(() => '#cccccc') // Gray land
      .polygonSideColor(() => '#cccccc')
      .polygonStrokeColor(() => 'transparent')
      .backgroundColor('#ffffff') // White sea
      .polygonAltitude(() => 0.003); // Slightly elevated so land sits on top

    globe.scene().add(new THREE.AmbientLight(0xffffff, 0.7));
    globe.scene().add(new THREE.DirectionalLight(0xffffff, 0.6));

    this.globeInstance = globe;
    this.adjustCamera();

    //const camera = globe.camera();
    //camera.position.z = 400;
    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enableZoom = false;

    const tunisiaCentroid =
      this.countryGeoService.getCountryCentroidByName('Tunisia');

    if (globe) {
      this.renderMarkers(globe);
    } else {
      console.error('Globe instance is undefined!');
    }
  }

  // on window resize so the globe fits the view
  @HostListener('window:resize')
  onResize() {
    this.globeInstance.width(window.innerWidth).height(window.innerHeight);
    this.adjustCamera();
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
      environmentInjector: this.environmentInjector,
    });

    componentRef.setInput('name', location.name);
    componentRef.setInput('details', location.details);

    componentRef.changeDetectorRef.detectChanges();

    return componentRef.location.nativeElement;
  }

  adjustCamera() {
    if (this.globeInstance) {
      const camera = this.globeInstance.camera();
      let minZ = 280; // best tested value for big screens
      let maxZ = 400; //best tested value for small screens

      let minWidth = 350; //small screens
      let maxWidth = 1900; //bigger screens

      //we're mapping how big the screen is to a value from 0 to 1
      console.log(window.innerWidth);
      let t = (window.innerWidth - minWidth) / (maxWidth - minWidth);
      t = Math.max(0, Math.min(1, t));

      t = 1 - t; //cuz the bigger the screen , the smaller the z value (how far the camera is)
      camera.position.z = minZ + t * (maxZ - minZ);
    }
  }
}
