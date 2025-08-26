import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { CardWithHorizontalLines } from '../cards/card-with-horizontal-lines/card-with-horizontal-lines';
import { CommonModule } from '@angular/common';
import { DetectHorizontalOverflow } from '../directives/detect-horizontal-overflow';
import { CircularButton } from '../buttons/circular-button/circular-button';
import { ScrollButtons } from '../directives/scroll-buttons';
import { ScrollPagination } from '../scroll-pagination/scroll-pagination';
import { gsap } from 'gsap';

@Component({
  selector: 'app-news',
  imports: [
    GenericTitle,
    CardWithHorizontalLines,
    CommonModule,
    DetectHorizontalOverflow,
    CircularButton,
    ScrollButtons,
    ScrollPagination,
  ],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('newsScrollSection') newsScrollSection!: HTMLElement;
  //@ViewChild('singleCard') singleCard!: HTMLElement;

  @ViewChild('sliderContainer') sliderContainer!: ElementRef;
  private animation!: gsap.core.Tween;

  cardWidth: number = 0;

  newsList: string[] = [
    'Wind Consulting take a part of forum FUTURALLIA: international and multi-sector business forum looking to develop foreign partnerships and markets',
    'La plupart des entreprises sont conscientes de la nécessité de digitaliser leur supply chain pour rester compétitives. Mais, devant une offre…',
  ];

  showScrollButtons: boolean = false;

  //get the width of the card from the card component (the child)
  @ViewChild(CardWithHorizontalLines) childCard!: CardWithHorizontalLines;

  ngOnInit() {}

  ngOnDestroy() {
    if (this.animation) {
      this.animation.kill();
    }
  }

  ngAfterViewInit() {
    const cardElement = this.childCard.getCardElement();
    this.cardWidth = cardElement.getBoundingClientRect().right;
    this.initializeAnimation();
  }

  private initializeAnimation() {
    const container = this.sliderContainer.nativeElement;
    const firstChild = container.children[0] as HTMLElement;
    setTimeout(() => {
      const textWidth = firstChild.offsetWidth;

      gsap.set(container, { x: 0 });

      this.animation = gsap.to(container, {
        x: -textWidth,
        duration: 15,
        ease: 'none',
        repeat: -1,
        repeatDelay: 0
      });
    }, 100);
  }

  pauseAnimation() {
    this.animation.pause();
  }

  resumeAnimation() {
    this.animation.resume();
  }

}


