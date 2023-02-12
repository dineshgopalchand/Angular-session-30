import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];
  constructor() {}

  ngOnInit(): void {}
  addTodo(todoinput: HTMLInputElement) {
    const newTodo = todoinput.value.trim();
    if (newTodo.length > 3) {
      this.todoList.push({
        id: Date.now(),
        active: true,
        title: newTodo,
      });
      todoinput.value = '';
    }
  }
  deleteCourse(item: TodoItem) {
    this.todoList = this.todoList.filter((todo) => todo.id != item.id);
  }
  updateStatus(item: TodoItem) {
    this.todoList = this.todoList.map((todo) => {
      return {
        ...todo,
        active: todo.id == item.id ? !todo.active : todo.active,
      };
    });
  }
}
// export type todoItem={
//   id:number;
//   title:string;
//   active:boolean;
// }
// export class TodoItem{
//   id!:number;
//   title!:string;
//   active!:boolean;
// }
export interface TodoItem {
  id: number;
  title: string;
  active: boolean;
}
