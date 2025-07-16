import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Hero } from "./hero/hero";
import { Globe } from "./globe/globe/globe";
import { GenericTitle } from "./generic-title/generic-title/generic-title";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Globe, GenericTitle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit {
  protected title = 'wind-consulting-redesign';

  ngOnInit(): void {
      window.scrollTo(0, 0);
  }
}
