import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ButtonWithBackground } from "../buttons/button-with-background/button-with-background";
import { HamburgerMenu } from "./hamburger-menu/hamburger-menu";
import { CircularButton } from "../buttons/circular-button/circular-button";
import { MobMenuItems } from "./mob-menu-items/mob-menu-items";
import { SpaceObserver } from '../directives/space-observer';



@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ButtonWithBackground,
    HamburgerMenu,
    CircularButton,
    MobMenuItems,
    SpaceObserver,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  isMenuOpen = false;
  isSearchOpen = false;
  mobileSearch = false;
  desktopSearch = false;
  searchBarHeight = 0;
  necessaryContentWidth = 0;
  unnecessaryContentWidth = 0;
  showContactUsButton = true;

  Services = ['Qui Sommes Nous', 'Expertises', 'Nos Services', 'Carrière'];

  //this is so the search bar is directly under the navbar
  @ViewChild('navbar') navbar!: ElementRef;
  //now the items list
  @ViewChild('searchBar') searchBar!: ElementRef<HTMLDivElement>;

  //we're using these so that when there is no space for the contact us button we can hide it
  /*@ViewChildren('mainContent') mainContents!: QueryList<ElementRef>;
  @ViewChild('contactUs') contactUs!: ElementRef<HTMLElement>;*/


  ngAfterViewInit() {
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';

    //calculate the necessary content width
    /*this.mainContents.forEach((el) => {
      this.necessaryContentWidth = this.necessaryContentWidth + el.nativeElement.ge;

    })
    this.unnecessaryContentWidth = this.contactUs.nativeElement.scrollWidth;
    console.log(this.unnecessaryContentWidth);*/
  }

  toggleMobileSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    this.mobileSearch = !this.mobileSearch;
    setTimeout(() => {
      this.updateSearchBarHeight();
    }, 10);
  }

  updateSearchBarHeight() {
    if (this.isSearchOpen) {
      this.searchBarHeight = this.searchBar.nativeElement.offsetHeight;
    } else {
      this.searchBarHeight = 0;
    }
  }

  toggleDesktopSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    this.desktopSearch = !this.desktopSearch;
  }

  //animations on the navbar using gsap


}

