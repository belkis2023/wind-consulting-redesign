import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appSpaceObserver]'
})
export class SpaceObserver  implements AfterViewInit {

  @Input() container!: HTMLElement;
  @Input() necessaryContentWidth!: number;
  @Input() unecessaryContentWidth!: number;
  @Output() isUnnecessaryContentVisible = new EventEmitter<boolean>();

  private observer!: ResizeObserver;

  constructor() {}

  ngAfterViewInit() {
    if(!this.container) return;

    this.observer = new ResizeObserver(() => this.checkWidth());
    this.observer.observe(this.container);
    this.checkWidth();
  }

  checkWidth() {
    const containerWidth = this.container.clientWidth;
    const requiredWidth = this.necessaryContentWidth + this.unecessaryContentWidth;
    const canShow = containerWidth >= requiredWidth;

    this.isUnnecessaryContentVisible.emit(canShow);
  }


}
