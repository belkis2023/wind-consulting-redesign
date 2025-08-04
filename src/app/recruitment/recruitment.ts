import { Component } from '@angular/core';
import { CardCircularCut } from '../cards/card-circular-cut/card-circular-cut';

@Component({
  selector: 'app-recruitment',
  imports: [CardCircularCut],
  templateUrl: './recruitment.html',
  styleUrl: './recruitment.css',
})
export class Recruitment {
  tag: string = 'Wind Recrute';
  title: string = 'Développeur Fullstack Java / Angular';
  description: string = 'Dans le cadre du renforcement de ses équipes, Wind Consulting recherche d’un développeur Java/JEE d’une expérience de 3 ans minimum en développement de solution Java/JEE avec le Framework Spring MVC';
  buttonLabel: string = 'Offres d\'emploi';
  imageUrl: string = "/background-images/cards/recruitement/recrute1.jpg";
}
