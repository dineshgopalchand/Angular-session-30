import { Component } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = 'Courses List';
  coursesList: Course[] = [];
  constructor(private courseService: CoursesService) {
    this.coursesList = courseService.coursesList;
  }

  addNewCourse() {
    this.courseService.addNewCourse();
  }

}
