import { Component } from "@angular/core";

@Component({
  selector: 'app-course',
  template: `
  <div>{{showTitle()}}</div>
  <p>{{1+1+1}}</p>
  <app-courses></app-courses>
  `
})
export class CourseComponent {
  private title = 'Course component!!';
  constructor() {
    console.log('course component');
  }

  showTitle() {
    return this.title.toUpperCase();
  }

}
