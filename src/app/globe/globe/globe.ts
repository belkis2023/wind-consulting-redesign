import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import GlobeGl from 'globe.gl';
import * as THREE from 'three';
import * as topojson from 'topojson-client';

const locations: Location[] = [
  { lat: 36.8065, lng: 10.1815, name: 'Tunis Office' },
  { lat: 48.8566, lng: 2.3522, name: 'Paris Office' }
  // Add more as needed
];

interface Location {
  lat: number;
  lng: number;
  name: string;
}

@Component({
  selector: 'app-globe',
  imports: [],
  templateUrl: './globe.html',
  styleUrl: './globe.css'
})
export class Globe implements AfterViewInit {
  @ViewChild('globeContainer') globeContainer!: ElementRef;
  @ViewChild('globeWrapper', { static: false }) globeWrapper!: ElementRef;

  constructor(private renderer: Renderer2) { }

  async ngAfterViewInit() {
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
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.enableZoom = false;

    this.renderMarkers(globe);

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

    globeInstance.htmlElementsData(locations)
      .htmlLat((d: Location) => d.lat)
      .htmlLng((d: Location) => d.lng)
      .htmlElement((d: Location) => this.createMarkerElement(d));
  }

  //creates a styled marker for a location 
  createMarkerElement(location: { name: string }) {
    const el = document.createElement('div');
    el.innerHTML = location.name;
    el.style.color = '#333';
    el.style.background = '#fff';
    el.style.padding = '2px 5px';
    el.style.borderRadius = '4px';
    el.style.fontSize = '10px';
    el.style.boxShadow = '0 0 2px rgba(0,0,0,0.5)';
    el.style.pointerEvents = 'auto';
    el.onclick = () => alert(`Clicked on: ${location.name}`);
    return el;
  }
}
