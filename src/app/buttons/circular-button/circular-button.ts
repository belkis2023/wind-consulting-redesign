import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-button',
  imports: [NgClass, CommonModule],
  templateUrl: './circular-button.html',
  styleUrl: './circular-button.css'
})
export class CircularButton {
  @Input() icon: 'arrow-up-right' | 'plus' | 'x-mark' = 'arrow-up-right';
  @Input() bgColor: string = 'bg-white';
  @Input() textColor: string = 'text-white';
  @Input() size: string = 'w-8 h-8';
  @Input() outline: boolean = true;
  @Input() outlineColor: string = 'border-white'; 
}
