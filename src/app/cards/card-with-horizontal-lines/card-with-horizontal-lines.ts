import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { LineWrapper } from '../../line-wrapper/line-wrapper';
import { ClientCard } from '../client-card/client-card';
import { CircularButton } from '../../buttons/circular-button/circular-button';

@Component({
  selector: 'app-card-with-horizontal-lines',
  imports: [LineWrapper, ClientCard, CircularButton],
  templateUrl: './card-with-horizontal-lines.html',
  styleUrl: './card-with-horizontal-lines.css',
})
export class CardWithHorizontalLines {
  @Input() newsText: string = '';
  @ViewChild('newsCard') newsCard!: ElementRef<HTMLDivElement>;

  getCardElement(): HTMLElement {
    return this.newsCard.nativeElement;
  }

}
