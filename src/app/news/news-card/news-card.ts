import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-news-card',
  imports: [CommonModule],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {
  @Input() cardBackgroundImage!: string;
}
