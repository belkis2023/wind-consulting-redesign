import { Component, HostListener, Input } from '@angular/core';
import { CircularButton } from '../../buttons/circular-button/circular-button';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ButtonWithBackground } from '../../buttons/button-with-background/button-with-background';

@Component({
  selector: 'app-card-circular-cut',
  imports: [CircularButton, NgForOf, CommonModule, ButtonWithBackground],
  templateUrl: './card-circular-cut.html',
  styleUrl: './card-circular-cut.css',
})

export class CardCircularCut {
  @Input() bgColor: string = 'bg-wind-blue';
  @Input() round: 'full' | 'lg' | 'xl' = 'lg';
  @Input() tag: string = '';

  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.matchMedia('(max-width: 768px)').matches;
  }

  get dynamicStyles() {
    return {
      'mask-image': this.isMobile
        ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent)'
        : 'linear-gradient(to right, rgba(0, 0, 0, 1), transparent)',
      '-webkit-mask-image': this.isMobile
        ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
        : 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    }
  }



  getRoundedClass(): string {
    switch (this.round) {
      case 'full':
        return 'rounded-full';
      case 'lg':
        return 'rounded-2xl md:rounded-lg';
      case 'xl':
        return 'rounded-xl';
      default:
        return '';
    }
  }
}
