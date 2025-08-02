import { Component } from '@angular/core';
import { GenericTitle } from '../generic-title/generic-title/generic-title';
import { ChiffresClesCard } from '../cards/chiffres-cles-card/chiffres-cles-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chiffres-cles',
  imports: [GenericTitle, ChiffresClesCard, CommonModule],
  templateUrl: './chiffres-cles.html',
  styleUrl: './chiffres-cles.css',
})
export class ChiffresCles {
  chiffres: string[] = [
    "dizaines de projets dans plus de 10 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient.",
    "dizaines de projets dans plus de 10 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient.",
    "dizaines de projets dans plus de 10 pays d’Europe, d’Amérique du Nord, d’Afrique et du Moyen-Orient."
  ];

  backgroundImages: string[] = [
    '/chiffres-cles/chiffre-card1.png',
    '/chiffres-cles/chiffre-card2.png'
  ]


}
