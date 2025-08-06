import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { ChiffresClesCard } from '../cards/chiffres-cles-card/chiffres-cles-card';
import { CommonModule } from '@angular/common';
import { CircularButton } from '../buttons/circular-button/circular-button';
import { ScrollButtons } from '../directives/scroll-buttons';
import { ScrollPagination } from '../scroll-pagination/scroll-pagination';
import { DetectHorizontalOverflow } from '../directives/detect-horizontal-overflow';

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
  chiffresScrollContainer!: ElementRef<HTMLDivElement>;

  showScrollButtons: boolean = false;

  chiffres: string[] = [
    'dizaines de projets dans plus de 10 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient.',
    'dizaines de projets dans plus de 10 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient.',
    'dizaines de projets dans plus de 10 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient.',
  ];

  backgroundImages: string[] = [
    '/chiffres-cles/chiffre-card1.png',
    '/chiffres-cles/chiffre-card2.png',
  ];

  ngAfterViewInit() {
    if (!this.chiffresScrollContainer) return; //make sure it's not null

  }
}
