import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
    console.log(this.showScrollButtons);


  }

  get containerClass() {
    return {
      // Base classes
      'w-full transition-all duration-300': true,

      // Conditional heights based on boolean + screen size
      'h-96 sm:h-40 md:h-[790px]': !this.showScrollButtons,
      'h-[750px] sm:h-80 md:h-96': this.showScrollButtons
    };

}


}
