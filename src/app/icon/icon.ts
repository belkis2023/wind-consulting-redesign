import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class Icon {
  @Input() icon: 'arrow-up-right' | 'plus' | 'x-mark' | 'hamburger-menu' | 'search' | 'logoWhite' | 'logoBlue' | 'left-scroll' | 'right-scroll' = 'arrow-up-right';
  @Input() strokeWidth: number = 1.5;
  @Input() strokeColor: string = 'stroke-wind-blue';
  @Input() logoSize: string = "size-10"
  @Input() hasBackgroundImage: boolean = false;
  @Input() imgUrl!: string;

}
