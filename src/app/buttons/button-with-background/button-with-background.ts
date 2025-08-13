import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Icon } from "../../icon/icon";
import { CircularButton } from '../circular-button/circular-button';

@Component({
  selector: 'app-button-with-background',
  imports: [NgClass, NgStyle, CommonModule, Icon, CircularButton],
  templateUrl: './button-with-background.html',
  styleUrl: './button-with-background.css',
})
export class ButtonWithBackground implements OnInit {
  @Input() textColor: string = 'text-white';
  @Input() backgroundImageUrl!: string;
  @Input() bgColor: string | 'bg-button-back' | 'bg-white' = 'bg-button-back';
  @Input() backgroundPosition: string = 'center';
  @Input() width: string = 'w-150';
  @Input() height: string = 'h-180';
  @Input() label!: string;
  @Input() icon: null | 'search' | 'arrow-up-right' = null;
  @Input() strokeWidth!: number;
  @Input() strokeColor!: string;
  @Input() logo!: boolean;
  @Input() whichLogo: 'logoWhite' | 'logoBlue' = 'logoWhite';
  @Input() imageOpacity: string = 'opacity-55';
  @Input() logoSize: string = 'size-12';
  @Input() rounded: string = 'rounded-full';

  @Input() leftIcon: string = '';
  @Input() fillColor: string = '';
  @Input() iconBgColor: string =';'

  ngOnInit() {}
}
