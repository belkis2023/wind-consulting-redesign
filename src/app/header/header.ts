import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',

})
export class Header implements AfterViewInit {
  isMenuOpen = false;
  isSearchOpen = false;
  mobileSearch = false;
  desktopSearch = false;
  searchBarHeight = 0;

  //this is so the search bar is directly under the navbar
  @ViewChild('navbar') navbar!: ElementRef;
  //now the items list
  @ViewChild('searchBar') searchBar!: ElementRef<HTMLDivElement>;
  
  @ViewChild('menuItems') menuItems!: ElementRef;

  ngAfterViewInit() {

    const navbarHeight = this.navbar.nativeElement.offsetHeight;
    document.body.style.paddingTop = navbarHeight + 'px';
  /*   const searchbarHeight = this.menuItems.nativeElement.offsetHeight;
    document.body.style.paddingTop = this.menuItems + 'px'; */
    
  }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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


 




  

}

