import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursesList: Course[] = [
    {
      id: 1,
      name: 'HTML',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
      isLike: true,
      likeCount: 23
    },
    {
      id: 2,
      name: 'CSS',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
      isLike: false,
      likeCount: 23
    },
    {
      id: 3,
      name: 'JS',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
      isLike: true,
      likeCount: 45
    },
    {
      id: 4,
      name: 'Angular',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
      isLike: true,
      likeCount: 73
    },
    {
      id: 5,
      name: 'NodeJS',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
      isLike: false,
      likeCount: 53
    },
    {
      id: 6,
      name: 'Express JS',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
      isLike: true,
      likeCount: 46
    }
  ];

  addNewCourse() {
    this.coursesList.push({
      id: 7,
      name: 'MongoDB',
      details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, neque.',
    })
  }
}

