import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marker',
  imports: [],
   standalone: true,
  templateUrl: './marker.html',
  styleUrl: './marker.css'
})
export class Marker {
  @Input() name!: string;
  @Input() details!: string;
}
