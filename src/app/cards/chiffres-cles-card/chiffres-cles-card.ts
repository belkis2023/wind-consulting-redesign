import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GenericTitle } from '../../generic-title/generic-title/generic-title';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { CommonModule } from '@angular/common';
import { chiffreCle } from '../../models/project';

@Component({
  selector: 'app-chiffres-cles-card',
  imports: [GenericTitle, CommonModule],
  templateUrl: './chiffres-cles-card.html',
  styleUrl: './chiffres-cles-card.css',
})
export class ChiffresClesCard implements AfterViewInit {
  @Input() chiffreCle!: chiffreCle;
  @Input() imageUrl!: string;

  @ViewChild('card') card!: ElementRef;
  @ViewChild('imageDiv') imageDiv!: ElementRef;
  @ViewChild('contentDiv') contentDiv!: ElementRef;
  @ViewChild('title') title!: ElementRef;

  //estaamel view child
  //animations
  ngAfterViewInit() {


    const card = this.card;
    const image = this.imageDiv.nativeElement;
    const title = this.title.nativeElement;
    const content = this.contentDiv.nativeElement;
    const moveY = image.querySelector('img').offsetHeight;

    card?.nativeElement.addEventListener('mouseenter', () => {
      gsap.to(image, {
        y: - moveY,
        ease: 'power2.out',
        duration: 0.5,
      });

      gsap.to(content, {opacity: 1, duration: 0.5});
      gsap.to(title, { opacity: 0, duration: 0.5 });

    });

    card?.nativeElement.addEventListener('mouseleave', () => {
      gsap.to(image, {
        y: 0,
        opacity: 1,
        duration: 1
      });
      gsap.to(content, {opacity: 0, duration: 1});
      gsap.to(title, { opacity: 1, duration: 0.5 });
    });

  }
  getCardElement(): HTMLElement {
    return this.card.nativeElement;
  }

}
