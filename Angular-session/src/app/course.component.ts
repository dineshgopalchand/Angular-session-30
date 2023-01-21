import { Component } from "@angular/core";
import { Course } from "./interfaces/course.interface";
import { CoursesService } from "./services/courses.service";

@Component({
  selector: 'app-course',
  template: `
  <div>{{showTitle()}}</div>
  <ul>
  <li *ngFor="let item of coursesList">{{item.name}} ({{item.id}})</li>
</ul>
  `
})
export class CourseComponent {
  private title = 'Course component!!';
  coursesList: Course[] = [];
  constructor(private courseService: CoursesService) {
    this.coursesList = courseService.coursesList;
  }

  showTitle() {
    return this.title.toUpperCase();
  }

}
