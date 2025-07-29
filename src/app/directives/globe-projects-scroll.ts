import { Directive, ElementRef } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


@Directive({
  selector: '[appGlobeProjectsScroll]'
})
export class GlobeProjectsScroll {

  private tl?: gsap.core.Timeline;
  private mm?: gsap.MatchMedia;
  private stPin?: ScrollTrigger;
  private stScale?: ScrollTrigger;
  private stMove?: ScrollTrigger;
  private stProjects?: ScrollTrigger;

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    this.setupScrollAnimation();
  }


  //we're using timeline, for the synchronisation between the projects cards and the globe scaling 

  private setupScrollAnimation() {

    this.mm = gsap.matchMedia();
    this.mm.add("(min-width: 768px)", () => {
      this.tl = gsap.timeline();


      this.stPin = ScrollTrigger.create({
        trigger: "#scroll-container",
        pin: ".globeWrapper",
        start: "top top",
        endTrigger: '#projects',
        end: 'bottom bottom',
        animation: this.tl,
        scrub: true,
      })

      this.stScale = ScrollTrigger.create({
        trigger: ".globeWrapper",
        start: "30% center",
        end: "+=400", ////
        scrub: 0.5,
        animation: gsap.to(".globeWrapper", { opacity: 1, scale: 1.4, ease: "power2.inOut" }),
        
      });

      this.stMove = ScrollTrigger.create({
        trigger: "#scroll-container",
        start: "80% bottom+=800px", // begins after first scroll ends
        endTrigger: '#projects',
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        animation: gsap.to(".globeWrapper", { xPercent: 10, duration: 0.5, ease: "power2.out" }),
      });



      this.stProjects = ScrollTrigger.create({
        trigger: "#scroll-container",
        start: "20% bottom+=800px",
        endTrigger: '#projects',
        end: "bottom bottom",
        scrub: true,
        animation: gsap.from("#projects", { x: -10 }),
      });

    })




  }
}
