import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-line-wrapper',
  imports: [NgIf],
  templateUrl: './line-wrapper.html',
  styleUrl: './line-wrapper.css',
})
export class LineWrapper {
  @Input() topLine: boolean = true;
  @Input() bottomLine: boolean = true;
}
