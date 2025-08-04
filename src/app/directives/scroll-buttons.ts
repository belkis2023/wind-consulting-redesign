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
  @ContentChildren('cardRef', { read: ElementRef }) cards!: QueryList<ElementRef>;
  //if we want to use the snap-to-card effect:


  currentIndex = 0;

  constructor() { }

  scroll(direction: 'left' | 'right') {
    if (!this.scrollTarget) return;

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

  scrollToCard(direction: 'left' | 'right') {
    if(!this.cards) {
      console.log("bla");
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
  }

}

/*scrollClients(direction: 'left' | 'right') {
    const container = this.clientScrollContainer.nativeElement;
    const scrollAmount = 300;



    gsap.to(container, {
      scrollLeft: direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount,
      duration: 0,
      ease: 'power2.out'
    })

  }*/
