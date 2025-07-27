import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-texture',
  imports: [CommonModule],
  templateUrl: './texture.html',
  styleUrl: './texture.css'
})
export class Texture {
  @Input() fillColor: string = 'stroke-[#b8dbfb]';


}

