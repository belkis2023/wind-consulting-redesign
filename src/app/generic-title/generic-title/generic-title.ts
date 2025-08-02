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

  getClass() {
    switch (this.size) {
      case 'small':
        return '!text-lg md:!text-xl';
      case 'medium':
        return '!text-xl md:!text-3xl';
      case 'large':
        return '!text-3xl md:!text-5xl';
      default:
        return '!text-xl md:!text-5xl';
    }
  }
}
