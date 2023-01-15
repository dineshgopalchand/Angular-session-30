import { Component } from "@angular/core";

@Component({
  selector:'app-course',
  template:`
  <div>{{title}}</div>
  `
})
export class CourseComponent{
  title='Course component!!';
  constructor(){
    console.log('course component');
  }

}
