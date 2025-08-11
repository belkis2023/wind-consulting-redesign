import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CommonModule } from '@angular/common';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-test-orbit',
  imports: [CommonModule],
  templateUrl: './test-orbit.html',
  styleUrl: './test-orbit.css',
})
export class TestOrbit implements AfterViewInit {
  @ViewChild('test') test!: ElementRef;

  ngAfterViewInit() {

    gsap.to(this.test.nativeElement, {
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],

      },
      duration: 5,
      ease: "linear",
      repeat: -1,

    });
  }
}


