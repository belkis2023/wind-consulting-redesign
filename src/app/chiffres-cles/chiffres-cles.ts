import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { ChiffresClesCard } from '../cards/chiffres-cles-card/chiffres-cles-card';
import { CommonModule } from '@angular/common';
import { CircularButton } from '../buttons/circular-button/circular-button';
import { ScrollButtons } from '../directives/scroll-buttons';
import { ScrollPagination } from '../scroll-pagination/scroll-pagination';
import { DetectHorizontalOverflow } from '../directives/detect-horizontal-overflow';
import { chiffreCle } from '../models/project';

@Component({
  selector: 'app-chiffres-cles',
  imports: [
    GenericTitle,
    ChiffresClesCard,
    CommonModule,
    CircularButton,
    ScrollButtons,
    ScrollPagination,
    DetectHorizontalOverflow,
  ],
  templateUrl: './chiffres-cles.html',
  styleUrl: './chiffres-cles.css',
})
export class ChiffresCles implements AfterViewInit {
  @ViewChild('chiffresScrollContainer', { static: false })
  chiffresScrollContainer!: ElementRef<HTMLElement>;
  @ViewChild(ChiffresClesCard) childCard!: ChiffresClesCard;

  //for the responsive svg
  @ViewChild('responsiveSvg', { static: true }) svgRef!:ElementRef<SVGElement>;

  showScrollButtons: boolean = false;
  cardWidth: number = 0;

  chiffres: chiffreCle[] = [
    {number: '9', type: 'Années d\'expérience', description: 'En 9 ans d’activité, Wind Consulting a accompagné de nombreux clients avec des solutions digitales et de consulting adaptées à leurs besoins.'},
    {number: '20-50', type: 'Collaborateurs', description: 'une équipe de 15 à 20 collaborateurs engagés, experts du digital et du consulting.' },
    {number: '11', type: 'Pays d\'interventions', description: 'dizaines de projets dans plus de 11 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient.'}
  ];

  backgroundImages: string[] = [
    '/public/chiffres-cles/chiffre-card1.png',
    '/public/chiffres-cles/chiffre-card2.png',
    '/public/chiffres-cles/chiffre-card3.jpg'
  ];


  ngAfterViewInit() {


    const cardElement = this.childCard.getCardElement();
    this.cardWidth = cardElement.offsetWidth;

    this.adjustSVG();


  }

  @HostListener('window:resize')
  onResize() {
    this.adjustSVG();
  }

  private adjustSVG() {
    const svg = this.svgRef.nativeElement;
    const width = window.innerWidth;


    if (width < 640) {
      // extra small screens
      svg.setAttribute('viewBox', '0 0 600 1200');
      svg.setAttribute('width', '80%');
      svg.setAttribute('height', '800');
    } else if (width < 896) {
      // small screens 640px to 896px
      svg.setAttribute('viewBox', '0 0 750 1200');
      svg.setAttribute('width', '60%');
      svg.setAttribute('height', '880');
    } else {
      // medium and larger > 896px
      svg.setAttribute('viewBox', '0 0 850 1200');
      svg.setAttribute('width', '40%');
      svg.setAttribute('height', '860');
    }
  }

  get containerClass() {
    return {

      'h-96 sm:h-40 md:h-[760px]': !this.showScrollButtons,
      'h-[750px] xs:h-[790px] sm:h-[830px] md:h-[830px]': this.showScrollButtons
    };
  }




}
