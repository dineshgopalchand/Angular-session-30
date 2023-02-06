import { Component, OnInit } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  get courseList() {
    return this.coursesService.coursesList;
  }
  updateCourse(updatedCourseVal: Course) {
    console.log(updatedCourseVal);
    this.coursesService.coursesList = this.courseList.map(course => {
      if (course.id == updatedCourseVal.id) {
        return updatedCourseVal;
      } else {
        return course;
      }
    })
    console.log(this.courseList);
  }

}
