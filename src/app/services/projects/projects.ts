import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class Projects {

  private projects: project[] = [

    {
      title: 'Project One',
      description: 'First project description',
      backgroundImageUrl: 'src/app/shared/background-images/cards/project-card/project-card1.jpg',
      tags: ['Angular', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Project Two',
      description: 'Second project description',
      backgroundImageUrl: 'src/app/shared/background-images/cards/project-card/project-card1.jpg',
      tags: ['API', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project three',
      description: 'Second project description',
      backgroundImageUrl: 'src/app/shared/background-images/cards/project-card/project-card1.jpg',
      tags: ['API', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project four',
      description: 'Second project description',
      backgroundImageUrl: 'src/app/shared/background-images/cards/project-card/project-card1.jpg',
      tags: ['API', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project five',
      description: 'Second project description',
      backgroundImageUrl: 'src/app/shared/background-images/cards/project-card/project-card1.jpg',
      tags: ['API', 'Node.js', 'MongoDB']
    }
    // Add more as needed
  ]


  constructor(private http: HttpClient) { }

  getProjects$(): Observable<project[]> {
    return of(this.projects);
  } 

  getProjectsByTags(tag: string): project[] | null {
    return this.projects.filter(project => project.tags.includes(tag));
  }

  getProjectByName(name: string): project[] | null {
    return this.projects.filter(project => project.title.includes(name));
  }

}
