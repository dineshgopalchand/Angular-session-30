import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];
  constructor() {}

  ngOnInit(): void {
    const todoItemFromStorage = localStorage.getItem(Todo.storageKey);
    if (todoItemFromStorage) {
      this.todoList = JSON.parse(todoItemFromStorage);
    } else {
      this.todoList = [];
    }
  }
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
    this.postTodoList();
  }
  deleteCourse(item: TodoItem) {
    this.todoList = this.todoList.filter((todo) => todo.id != item.id);
    this.postTodoList();
  }
  updateStatus(item: TodoItem) {
    this.todoList = this.todoList.map((todo) => {
      return {
        ...todo,
        active: todo.id == item.id ? !todo.active : todo.active,
      };
    });
    this.postTodoList();
  }
  postTodoList() {
    localStorage.setItem(Todo.storageKey, JSON.stringify(this.todoList));
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
