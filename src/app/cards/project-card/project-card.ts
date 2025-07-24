import { Component, Input, OnInit } from '@angular/core';
import { project } from '../../models/project';
import { ProjectTag } from "./project-tag/project-tag";
import { CommonModule } from '@angular/common';
import { CircularButton } from "../../buttons/circular-button/circular-button";
import { log } from 'three/tsl';

@Component({
  selector: 'app-project-card',
  imports: [ProjectTag, CommonModule, CircularButton],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard implements OnInit {
  tagColors: string[] = ['#203A9D', '#E8B826', '#7AAFCD'];
  calculatedTagColors: string[] = [];


  ngOnInit(): void {
    this.calculateTagColors();
  }

  ngOnChanges(): void {
    // Recalculate when bgColor changes
    this.calculateTagColors();
  }

  @Input() project!: project;
  @Input() bgColor!: string;

  private calculateTagColors(): void {
    if (!this.project?.tags) return;

    this.calculatedTagColors = this.project.tags.map((_, i) => {
      if (this.bgColor === "bg-links-blue") {
        // skip tagColors[0]
        const restrictedColors = this.tagColors.slice(1); 
        return restrictedColors[i % restrictedColors.length];
      } else {
        // Use all colors 
        return this.tagColors[i % this.tagColors.length];
      }
    });
  }

}


