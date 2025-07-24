import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button-with-background',
  imports: [NgClass, NgStyle],
  templateUrl: './button-with-background.html',
  styleUrl: './button-with-background.css'
})
export class ButtonWithBackground {

  @Input() backgroundImageUrl!: string;
  @Input() backgroundSize: string = 'cover';
  @Input() backgroundPosition: string = 'center'
  @Input() width: string = 'w-150';
  @Input() height: string = 'h-180';
  @Input() label!: string;


}
