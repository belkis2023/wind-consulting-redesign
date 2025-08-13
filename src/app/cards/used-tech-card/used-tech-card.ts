import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GenericTitle } from '../../generic-title/generic-title/generic-title';
import { ButtonWithBackground } from '../../buttons/button-with-background/button-with-background';
import { NgForOf } from '@angular/common';
export const iconURLs = [
      { name: 'Angular', icon: '/orbit-technology/orbit-icons/angular.svg', },
      { name: 'Flutter', icon: '/orbit-technology/orbit-icons/flutter.svg',  },
      { name: 'Github', icon: '/orbit-technology/orbit-icons/github.svg',  },

      { name: 'NestJS', icon: '/orbit-technology/orbit-icons/nestjs.svg',  },
      {
        name: 'Postgres',
        icon: '/orbit-technology/orbit-icons/postgres.svg',

      },
      { name: 'Node.js', icon: '/orbit-technology/orbit-icons/nodejs.svg',  },


      { name: 'ReactJS', icon: '/orbit-technology/orbit-icons/reactjs.svg', },
      {
        name: 'SonarQube',
        icon: '/orbit-technology/orbit-icons/sonarqube.svg',

      },
      { name: 'VueJS', icon: '/orbit-technology/orbit-icons/vuejs.svg',},

];

@Component({
  selector: 'app-used-tech-card',
  imports: [GenericTitle, ButtonWithBackground, NgForOf],
  templateUrl: './used-tech-card.html',
  styleUrl: './used-tech-card.css',
})
export class UsedTechCard implements AfterViewInit {
  techs = iconURLs;
  @Input() start: number = 0;
  @Input() end: number = 4;
  @Input() visibleTechs: any;
  @Input() isSmallScreen: boolean = false;

  @ViewChild('card') card!: ElementRef<HTMLDivElement>;

  getCardElement(): any {
    return this.card.nativeElement;
  }

  ngAfterViewInit() {

  }


}
