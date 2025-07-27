import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWithBackground } from "../../buttons/button-with-background/button-with-background";
import { Icon } from "../../icon/icon";

@Component({
  selector: 'app-mob-menu-items',
  imports: [CommonModule, ButtonWithBackground, Icon],
  templateUrl: './mob-menu-items.html',
  styleUrl: './mob-menu-items.css'
})
export class MobMenuItems {
  @Input() services!: string[];

}
