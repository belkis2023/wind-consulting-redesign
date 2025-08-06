import { Component, Input } from '@angular/core';
import { ButtonWithBackground } from '../button-with-background/button-with-background';

@Component({
  selector: 'app-button-with-label',
  imports: [ButtonWithBackground],
  templateUrl: './button-with-label.html',
  styleUrl: './button-with-label.css',
})
export class ButtonWithLabel {

  @Input() label!:string;
  @Input() buttonLabel!:string;

}
