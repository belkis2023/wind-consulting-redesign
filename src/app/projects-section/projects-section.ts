import { Component, Input } from '@angular/core';
import { Projects } from '../services/projects/projects';
import { project } from '../models/project';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProjectCard } from "../cards/project-card/project-card";


@Component({
  selector: 'app-projects-section',
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection {
  projects$!: Observable<project[]>;
  
  bgColors: string[] = [ 'bg-wind-blue', 'bg-links-blue' ];

  constructor(private ProjectsService: Projects) {
    this.projects$ = this.ProjectsService.getProjects$();
  }
  
  
}
