import { Component, Input } from '@angular/core';
import { project } from '../../models/project';
import { ProjectTag } from "./project-tag/project-tag";
import { CommonModule } from '@angular/common';
import { CircularButton } from "../../circular-button/circular-button";

@Component({
  selector: 'app-project-card',
  imports: [ProjectTag, CommonModule, CircularButton],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {

  @Input() project!: project;

}
