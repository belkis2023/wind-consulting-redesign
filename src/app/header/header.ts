import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',

})
export class Header {
  isMenuOpen = false;
  isSearchOpen = false;
  mobileSearch = false;
  desktopSearch = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
  toggleMobileSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    this.mobileSearch = !this.mobileSearch;
  }

  toggleDesktopSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    this.desktopSearch = !this.desktopSearch;

  }



  

}

