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
  @Input() clientLogoData: ClientLogoData | null = null;
  @Input() isClient: boolean = false;
  @Input() clientName: string="";
  @Input() cardBackgroundImage!: string;
}
