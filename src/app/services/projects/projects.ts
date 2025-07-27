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
      title: 'Consulting',
      description: 'Découvrez le consulting stratégique.',
      backgroundImageUrl: 'background-images/cards/project-card/left1.jpg',
      tags: ['Transformation Digitale', 'programmes', 'Analytics']
    },
    {
      title: 'Outsourcing',
      description: 'Découvrez l externalisation sur mesure.',
      backgroundImageUrl: 'background-images/cards/project-card/left2.jpg',
      tags: ['Tierce Maintenance Applicative', 'Sourcing IT']
    },
    {
      title: 'Digital',
      description: 'Bénéficiez d un consulting digital expert.',
      backgroundImageUrl: 'background-images/cards/project-card/left3.png',
      tags: ['Stratégie digitale', 'Développement', 'Big Data']
    },
    {
      title: 'Technologie',
      description: 'Bénéficiez des conseil technologique indépendant.',
      backgroundImageUrl: 'background-images/cards/project-card/left4.jpg',
      tags: ['back-End', 'Front-End']
    }
   
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
