import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-pagination',
  imports: [CommonModule],
  templateUrl: './scroll-pagination.html',
  styleUrl: './scroll-pagination.css'
})
export class ScrollPagination implements OnInit, AfterViewInit {
  @Input() scrollContainer!: HTMLDivElement;
  @Input() scrollStep: number = 300;
  @Input() color: string = 'bg-wind-blue';
  @Input() singleElementWidth!: number;

  @Output() noPages = new EventEmitter<number>();
  pages: number = 0;
  currentPage: number = 0;

  private scrollListener: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if(this.singleElementWidth) {
      this.scrollStep = this.singleElementWidth;

    }
    this.calculatePages();
    this.listenToScroll();
  }


  calculatePages() {
    const container = this.scrollContainer;
    const totalScrollableWidth = container.scrollWidth - container.clientWidth;


    this.pages = Math.ceil(totalScrollableWidth / this.scrollStep) +1 ;

    this.noPages.emit(this.pages);

  }

  listenToScroll() {
    this.scrollListener = () => {

      const container = this.scrollContainer;
      this.currentPage = Math.ceil(container.scrollLeft/this.scrollStep);
    };
    this.scrollContainer.addEventListener('scroll', this.scrollListener)
  }
}
