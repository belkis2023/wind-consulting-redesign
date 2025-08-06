import { Component } from '@angular/core';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { ButtonWithLabel } from '../buttons/button-with-label/button-with-label';

@Component({
  selector: 'app-newsletter',
  imports: [GenericTitle, ButtonWithLabel],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {}
