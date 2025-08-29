import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
export class Header implements AfterViewInit, OnDestroy {
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
  */

  @ViewChild("contacterNous") contactUsElement!: ElementRef;
  @ViewChild('searchIconDesktop') searchIconDesktop!: ElementRef;
  contactButtonRight = 0;
  private resizeListener?: () => void;

  ngAfterViewInit() {
    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';

    //calculate the necessary content width
    /*this.mainContents.forEach((el) => {
      this.necessaryContentWidth = this.necessaryContentWidth + el.nativeElement.ge;

    })
    this.unnecessaryContentWidth = this.contactUs.nativeElement.scrollWidth;
    console.log(this.unnecessaryContentWidth);*/

    this.updateContactButtonPosition();

    // Update position when window resizes
    this.resizeListener = () => this.updateContactButtonPosition();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
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


  //this is to handle: search button (recherche) should be aligned with the contacter nous button
  updateContactButtonPosition() {
    if (!this.contactUsElement) {
      this.contactButtonRight = 0;
      return;
    }

    const contactButton = this.contactUsElement.nativeElement;
    if (contactButton) {
      // if element is actually visible
      const rect = contactButton.getBoundingClientRect();
      const isVisible = rect.width > 0 && rect.height > 0;

      if (isVisible) {
        console.log(window.innerWidth - rect.x - contactButton.offsetWidth);
        this.contactButtonRight = window.innerWidth - rect.x - contactButton.offsetWidth;

      } else {
        console.log();
        this.contactButtonRight = this.searchIconRightPosition();
      }
    }

    return 0;
  }



  private searchIconRightPosition() {
    return window.innerWidth - this.searchIconDesktop.nativeElement.getBoundingClientRect().x - this.searchIconDesktop.nativeElement.offsetWidth;
  }
}

