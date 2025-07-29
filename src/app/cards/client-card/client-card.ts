import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLogoData } from '../../clients-scrollbar/clients-scrollbar';

@Component({
  selector: 'app-client-card',
  imports: [CommonModule],
  templateUrl: './client-card.html',
  styleUrl: './client-card.css'
})
export class ClientCard {
  @Input() clientLogoData!: ClientLogoData;
  @Input() clientName!: string;
}
