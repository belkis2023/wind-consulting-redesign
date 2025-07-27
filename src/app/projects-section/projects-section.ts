import { AfterViewInit, Component, Input } from '@angular/core';
import { Projects } from '../services/projects/projects';
import { project } from '../models/project';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProjectCard } from "../cards/project-card/project-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-projects-section',
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection implements AfterViewInit {
  projects$!: Observable<project[]>;
  bgColors: string[] = ['bg-wind-blue', 'bg-links-blue'];


  constructor(private ProjectsService: Projects) {
    this.projects$ = this.ProjectsService.getProjects$();
  }

  ngAfterViewInit(): void {
    //the horizontal carousel logic
    const slides = document.querySelector(".slides");

    // 🌟 Fade-in effect
    gsap.from(slides, {
      autoAlpha: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: slides,
        start: '-50% 80%',
        toggleActions: 'play none none none',
      },
    });


    if (slides) {
      const tween = gsap.to(slides, {
        ease: 'none',
        //using this function we'll know how much scrolling we have to do based on the 
        //slides (aka the projects) width
        x: () => -(slides.scrollWidth - slides.getBoundingClientRect().width),
      });

      ScrollTrigger.create({
        trigger: slides,
        start: "-80% top",
        end: "+=400%",
        scrub: true,
        pin: true,
        animation: tween,
        invalidateOnRefresh: true,
      })

    }
  }






}
