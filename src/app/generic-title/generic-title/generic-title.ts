import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-generic-title',
  imports: [NgClass, NgStyle],
  templateUrl: './generic-title.html',
  styleUrl: './generic-title.css',
})
export class GenericTitle {

  @Input() color: string = 'text-[#172763]';
  @Input() boldness: string = 'font-normal';
  @Input() size!: string;
  @Input() lineHeight: string = '1 !important';

  getClass() {
    switch (this.size) {
      case 'xsmall':
        return '!text-base md:!text-2xl';
      case 'small':
        return '!text-lg md:!text-3xl';
      case 'medium':
        return '!text-lg xs:!text-xl md:!text-4xl';
      case 'large':
        return '!text-3xl md:!text-5xl';
      case 'xlarge':
        return '!text-3xl md:!text-8xl';
      default:
        return '!text-xl md:!text-4xl';
    }
  }
}
