import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTag } from './project-tag';

describe('ProjectTag', () => {
  let component: ProjectTag;
  let fixture: ComponentFixture<ProjectTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
