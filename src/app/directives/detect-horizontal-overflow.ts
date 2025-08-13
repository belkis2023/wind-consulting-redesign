import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDetectHorizontalOverflow]'
})
export class DetectHorizontalOverflow implements AfterViewInit {

  constructor(private el: ElementRef<HTMLElement>) { }

  @Output() isOverFlowing = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    this.checkOverflow();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkOverflow();
  }

  private checkOverflow() {
    const el = this.el.nativeElement;
    const isOverflowing = el.scrollWidth > el.clientWidth;

    this.isOverFlowing.emit(isOverflowing);

  }

}
