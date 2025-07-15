import { Component } from '@angular/core';
import { HeroCard } from './hero-card/hero-card';
import { HeroBackground } from "./hero-background/hero-background";


@Component({
  selector: 'app-hero',
  imports: [HeroCard, HeroBackground],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
