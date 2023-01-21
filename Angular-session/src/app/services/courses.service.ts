import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursesList: Course[] = [
    {
      id: 1,
      name: 'HTML'
    },
    {
      id: 2,
      name: 'CSS'
    },
    {
      id: 3,
      name: 'JS'
    },
    {
      id: 4,
      name: 'Angular'
    },
    {
      id: 5,
      name: 'NodeJS'
    },
    {
      id: 6,
      name: 'Express JS'
    }
  ];

  addNewCourse() {
    this.coursesList.push({
      id: 7,
      name: 'MongoDB'
    })
  }
}

