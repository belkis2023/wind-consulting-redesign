import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { GenericTitle } from "../generic-title/generic-title/generic-title";
import { CommonModule } from '@angular/common';
import { ClientCard } from "../cards/client-card/client-card";
import { CircularButton } from "../buttons/circular-button/circular-button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollPagination } from "../scroll-pagination/scroll-pagination";
import { ScrollButtons } from '../directives/scroll-buttons';
import { DetectHorizontalOverflow } from '../directives/detect-horizontal-overflow';
gsap.registerPlugin(ScrollTrigger);

export type ClientLogoData = {
  path: string;
  width: string;
  height: string;
}

@Component({
  selector: 'app-clients-scrollbar',
  imports: [
    GenericTitle,
    CommonModule,
    ClientCard,
    CircularButton,
    ScrollPagination,
    ScrollButtons,
    DetectHorizontalOverflow,
  ],
  templateUrl: './clients-scrollbar.html',
  styleUrl: './clients-scrollbar.css',
})
export class ClientsScrollbar implements AfterViewInit {
  @ViewChild('clientScrollContainer', { static: false })
  clientScrollContainer!: ElementRef<HTMLDivElement>;

  defaultW: string = 'w-40';
  defaultH: string = 'h-14';
  showScrollButtons: boolean = false;

  /*  pagesCount = 0;

  onNoPages(pages:number) {
    this.pagesCount = pages;
    console.log(this.pagesCount);
  } */

  clients = ['i-dair', 'worldSoftGroup', 'cnam', 'ebsys', 'sopra hr'];

  clientLogoData: Record<string, ClientLogoData> = {
    'i-dair': {
      path: '/public/background-images/clients/client1.png',
      width: this.defaultW,
      height: this.defaultH,
    },
    worldSoftGroup: {
      path: '/public/background-images/clients/client2.png',
      width: this.defaultW,
      height: 'h-10',
    },
    cnam: {
      path: '/public/background-images/clients/client3.png',
      width: 'w-36',
      height: 'h-20',
    },
    ebsys: {
      path: '/public/background-images/clients/client4.png',
      width: 'w-36',
      height: 'h-12',
    },
    'sopra hr': {
      path: '/public/background-images/clients/client5.png',
      width: 'w-40',
      height: 'h-36',
    },
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (!this.clientScrollContainer) return; //make sure it's not null
  }

  getClientLogoData(name: string) {
    return this.clientLogoData[name];
  }
}
