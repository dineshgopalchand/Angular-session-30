import { Component } from "@angular/core";

@Component({
  selector: 'app-course',
  template: `
  <div>{{title}}</div>
  <app-courses></app-courses>
  `
})
export class CourseComponent {
  title = 'Course component!!';
  constructor() {
    console.log('course component');
  }

}
