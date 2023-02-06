import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LikeUpdate } from '../common/component/like/like.component';
import { Course } from '../interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() detail = {} as Course;
  // @Input('detail') details = {} as Course;
  // @Input('detail') details!: Course;
  @Output() updateCourse = new EventEmitter<Course>();
  constructor() { }

  ngOnInit(): void {
  }

  updateLikeFn(data: LikeUpdate) {
    console.log('inside updateLikeFn', data);
    const details: Course = {
      ...this.detail,
      isLike: data.isLike,
      likeCount: data.likeCount
    }
    this.updateCourse.emit(details);
  }
}
