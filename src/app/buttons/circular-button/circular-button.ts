import { AfterViewInit, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Icon } from "../../icon/icon";

@Component({
  selector: 'app-circular-button',
  imports: [NgClass, CommonModule, Icon],
  templateUrl: './circular-button.html',
  styleUrl: './circular-button.css'
})
export class CircularButton implements AfterViewInit {
  @Input() icon: 'arrow-up-right' | 'plus' | 'x-mark' | 'hamburger-menu' | 'search' | 'left-scroll' | 'right-scroll' | 'facebook' | 'instagram' | 'linkedin' = 'arrow-up-right';
  @Input() bgColor: string = 'bg-white';
  @Input() textColor: string = 'text-white';
  @Input() size: string = 'w-8 h-8';
  @Input() outline: boolean = true;
  @Input() outlineWidth: string = 'border-1'
  @Input() outlineColor: string = 'border-white';
  @Input() strokeWidth: number = 1.5;
  @Input() strokeColor: string = 'stroke-wind-blue';
  @Input() bgImage?: string;
  @Input() iconPng = '';


  //if we have a background image
  get backgroundStyles() {
    if (this.bgImage) {
      return {
        'background-image': `url(${this.bgImage})`,
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat'
      }
    }
    return {};
  }

  ngAfterViewInit() {
    console.log(this.iconPng);
  }


}
