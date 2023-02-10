import { Component } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  title = 'Courses List';

  constructor(public courseService: CoursesService) {}
  get coursesList():Course[] {
    return  this.courseService.coursesList;
  }

  addNewCourse() {
    this.courseService.addNewCourse();
  }
  deleteCourse(item: Course) {
    this.courseService.deleteCourse(item);
    console.log(this.courseService.coursesList, this.coursesList);
  }
  trackByFn(index:number,item:Course){
    return item.id;
  }
}
