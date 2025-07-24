import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tag',
  imports: [],
  templateUrl: './project-tag.html',
  styleUrl: './project-tag.css'
})
export class ProjectTag {
  @Input() tag!: string;
}
