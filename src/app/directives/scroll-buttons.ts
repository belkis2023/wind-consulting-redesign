import { ContentChildren, Directive, ElementRef, Input, Query, QueryList } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appScrollButtons]',
  exportAs: 'ScrollButtons',
})
export class ScrollButtons {


  @Input() scrollTarget!: HTMLElement;
  @Input() scrollStep: number = 300;
  @Input() singleElementWidth!: number;
  //see this later
  @ContentChildren('cardRef', { read: ElementRef }) cards!: QueryList<ElementRef>;
  //if we want to use the snap-to-card effect:

  //testing

  //testing

  currentIndex = 0;

  constructor() { }

  scroll(direction: 'left' | 'right') {
    if (!this.scrollTarget) return;
    const containerStyles = getComputedStyle(this.scrollTarget);
    const gapStr = containerStyles.getPropertyValue('gap');
    const gap = parseFloat(gapStr) || 0; // Default to 0 if gap is not set
    if(this.singleElementWidth) {
      this.scrollStep = this.singleElementWidth + gap;
      console.log('Scroll step set to:', this.scrollStep);
    }

    const current = this.scrollTarget.scrollLeft;
    const distance = direction === 'left'
      ? current - this.scrollStep
      : current + this.scrollStep;

    gsap.to(this.scrollTarget, {
      scrollLeft: distance,
      duration: 0,
      ease: 'power2.out'
    })
  }

  /*scrollToCard(direction: 'left' | 'right') {
    if(!this.cards) {

      return;
    }
    const cardsArray = this.cards.toArray();
    if (direction === 'left' && this.currentIndex > 0) {
      this.currentIndex -- ;
    } else if (direction === 'right' && this.currentIndex < cardsArray.length - 1) {
      this.currentIndex ++ ;
    }

    const targetCard = cardsArray[this.currentIndex].nativeElement;
    const container = this.scrollTarget;

    gsap.to(container, {
      duration: 0.5,
      scrollTo: { x: targetCard.offsetLeft },
      ease: 'power2.out',
    });
  }*/


}


