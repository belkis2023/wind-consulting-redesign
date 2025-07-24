import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appObserveIntersection]'
})
export class ObserveIntersection implements OnInit {

  @Input() threshold: number = 0.1;
  
  //what's this used for?
  @Output() visibleChange = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.visibleChange.emit(entry.isIntersecting);
      }, {
        threshold: this.threshold
      }
    );
    this.observer.observe(this.el.nativeElement);
  }

   ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }


}
