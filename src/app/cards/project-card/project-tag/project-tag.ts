import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-project-tag',
  imports: [NgStyle],
  templateUrl: './project-tag.html',
  styleUrl: './project-tag.css'
})
export class ProjectTag {
  @Input() tagColor!: string;
  @Input() tag!: string;
}
