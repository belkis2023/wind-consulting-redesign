import {
  Component, ElementRef, ViewChild, AfterViewInit, ViewChildren, QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';


gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-orbit-technology',
  templateUrl: './orbit-technology.html',
  styleUrls: ['./orbit-technology.css'],
  standalone: true,
  imports: [CommonModule, GenericTitle],
})
export class OrbitTechnologyComponent implements AfterViewInit {

  //cx and cy are useless here, but when we have a different viewbox size, we can use them to center the orbit in the template
  cx = 785 / 2;
  cy = 780 / 2;



  iconsPerRing = 3;

  //this is used when

  rings = [
    {
      radius: 180,
      icons: [
        { name: 'Angular', icon: '/orbit-technology/orbit-icons/angular.svg' },
        { name: 'Flutter', icon: '/orbit-technology/orbit-icons/flutter.svg' },
        { name: 'Github', icon: '/orbit-technology/orbit-icons/github.svg' },
      ]
    },
    {
      radius: 270,
      icons: [
        { name: 'NestJS', icon: '/orbit-technology/orbit-icons/nestjs.svg' },
        { name: 'Postgres', icon: '/orbit-technology/orbit-icons/postgres.svg' },
        { name: 'Node.js', icon: '/orbit-technology/orbit-icons/nodejs.svg' }
      ]
    },
    {
      radius: 350,
      icons: [
        { name: 'ReactJS', icon: '/orbit-technology/orbit-icons/reactjs.svg' },
        { name: 'SonarQube', icon: '/orbit-technology/orbit-icons/sonarqube.svg' },
        { name: 'VueJS', icon: '/orbit-technology/orbit-icons/vuejs.svg' }
      ]
    }
  ];

  @ViewChildren('icon') icons!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.icons.forEach((iconRef, i) => {


      const el = iconRef.nativeElement;

      const ringIndex = parseInt(el.dataset['ring']!, 10);
      const offset = ringIndex/2 + i/this.iconsPerRing;
      console.log(offset);
      const pathId = `#orbitPath${ringIndex}`;


      // Animate along the circular path
      gsap.to(el, {
         // radians offset
        motionPath: {

          path: pathId,
          align: pathId,
          alignOrigin: [0.5, 0.5],
          start: offset, // starting offset
          end: 1 + offset // keeps it looping cuz we're basically wrapping it around (starting and ending at the same point)

        },
        modifiers: {
          // keeps it into [0, 1] range
          motionPath: (value) => value % 1
        },
        duration: 20,
        repeat: -1,
        ease: "linear",

      });
    });

  }


  circlePath(cx: number, cy: number, r: number): string {
    return [
      `M ${cx},${cy}`,
      `m -${r},0`,
      `a ${r},${r} 0 1,0 ${2 * r},0`,
      `a ${r},${r} 0 1,0 -${2 * r},0`,
      'Z'
    ].join(' ');
  }



}
/*
what we'll do for the icons:
we're gonna calculate how many icons we have, and what is the maximum radius we can use,
then on each ring we create (depending on the number of icons) we will distribute
the icons evenly around the ring
*/
