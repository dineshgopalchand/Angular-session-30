import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = 'Courses List';
  coursesList = [
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
      name: 'ExpressJS'
    }
  ];
  constructor() {
  }


}
