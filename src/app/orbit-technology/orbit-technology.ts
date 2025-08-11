import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CircularButton } from '../buttons/circular-button/circular-button';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-orbit-technology',
  templateUrl: './orbit-technology.html',
  styleUrls: ['./orbit-technology.css'],
  standalone: true,
  imports: [CommonModule, GenericTitle, CircularButton],
})
export class OrbitTechnologyComponent implements AfterViewInit {
  //cx and cy are useless here, but when we have a different viewbox size, we can use them to center the orbit in the template
  cx = 785 / 2;
  cy = 780 / 2;

  iconsPerRing = 3;

  //this is used when we hover the whole ring stops, so we need to name our tweens (a tween for each ring)

  ringTweens: gsap.core.Timeline[] = [];

  //some minimal stuff for styling
  bgColors = ['bg-[#8EC3FF]', 'bg-[#172763]', 'bg-[#EEE9E9]', 'bg-wind-blue']
  //          light blue  //                    dark blue  //                    light gray
  sizes = ['w-8 h-8', 'w-10 h-10']

  rings = [
    {
      radius: 250,
      icons: [
        { name: 'Angular', icon: '/orbit-technology/orbit-icons/angular.svg', color: 2 },
        { name: 'Flutter', icon: '/orbit-technology/orbit-icons/flutter.svg', color: 3 },
        { name: 'Github', icon: '/orbit-technology/orbit-icons/github.svg', color: 0 },
      ],
    },
    {
      radius: 270,
      icons: [
        { name: 'NestJS', icon: '/orbit-technology/orbit-icons/nestjs.svg', color: 0 },
        {
          name: 'Postgres',
          icon: '/orbit-technology/orbit-icons/postgres.svg',
          color: 1
        },
        { name: 'Node.js', icon: '/orbit-technology/orbit-icons/nodejs.svg', color: 2 },
      ],
    },
    {
      radius: 350,
      icons: [
        { name: 'ReactJS', icon: '/orbit-technology/orbit-icons/reactjs.svg', color: 1 },
        {
          name: 'SonarQube',
          icon: '/orbit-technology/orbit-icons/sonarqube.svg',
          color: 3
        },
        { name: 'VueJS', icon: '/orbit-technology/orbit-icons/vuejs.svg', color: 2 },
      ],
    },
  ];

  @ViewChildren('icon') icons!: QueryList<ElementRef>;

  ngAfterViewInit() {
    //creating an icons array
    const iconsArray = this.icons.toArray();

    //we're gonna map the icons to add a ring index to each icon
    const ringMap: { [key: number]: ElementRef[] } = {};
    //here we're mapping each icon to its ring
    iconsArray.forEach((icon) => {
      const ring = parseInt(icon.nativeElement.dataset['ring']);
      if (!ringMap[ring]) ringMap[ring] = [];
      ringMap[ring].push(icon);
    });

    //now we're gonna handle the tweens and the timelines
    for (const ringIndex in ringMap) {
      const ringNumber = Number(ringIndex);
      const ringIcons = ringMap[ringNumber];
      const iconsCount = ringIcons.length;

      ringIcons.forEach((icon, i) => {
        const el = icon.nativeElement;
        const offset = ringNumber / 5 + i / iconsCount;
        const pathId = `#orbitPath${ringNumber}`;

        const tween = gsap.to(el, {
          // radians offset
          motionPath: {
            path: pathId,
            align: pathId,
            alignOrigin: [0.5, 0.5],
            start: offset, // starting offset
            end: 1 + offset, // keeps it looping cuz we're basically wrapping it around (starting and ending at the same point)
          },
          modifiers: {
            // keeps it into [0, 1] range
            motionPath: (value) => value % 1,
          },
          duration: 20,
          repeat: -1,
          ease: 'linear',
        });

        // Store the tween in the ringTweens array
        if (!this.ringTweens[ringNumber]) {
          this.ringTweens[ringNumber] = gsap.timeline({ paused: false });
        }
        this.ringTweens[ringNumber].add(tween, 0);

        //now we're gonna treat hover events on icons
        el.addEventListener('mouseenter', () => {
          this.ringTweens[ringNumber].pause();
        });

        el.addEventListener('mouseleave', () => {
          this.ringTweens[ringNumber].resume();
        });
      });
    }

  }

  getBgColor(i: number) {
    console.log(this.bgColors[i % this.bgColors.length]);
    return 'bg-[' + this.bgColors[i % this.bgColors.length] + ']';

  }

  circlePath(cx: number, cy: number, r: number): string {
    return [
      `M ${cx},${cy - r}`,
      `a ${r},${r} 0 1,0 0,${2 * r}`,
      `a ${r},${r} 0 1,0 0,-${2 * r}`,
      'Z',
    ].join(' ');
  }
}
/*
what we'll do for the icons:
we're gonna calculate how many icons we have, and what is the maximum radius we can use,
then on each ring we create (depending on the number of icons) we will distribute
the icons evenly around the ring
*/
