import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Hero } from "./hero/hero";

@Component({
  selector: 'app-root',
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'wind-consulting-redesign';
}
