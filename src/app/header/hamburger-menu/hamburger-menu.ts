import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { CircularButton } from "../../buttons/circular-button/circular-button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  imports: [CircularButton, CommonModule],
  templateUrl: './hamburger-menu.html',
  styleUrl: './hamburger-menu.css'
})
export class HamburgerMenu {

  @Input() isMenuOpen: boolean = false;
  @Output() isMenuOpenChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpenChange.emit(this.isMenuOpen);
  }

}
