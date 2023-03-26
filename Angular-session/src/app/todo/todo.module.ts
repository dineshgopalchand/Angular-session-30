import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../common/shared/shared.module';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    TodoComponent
  ]
})
export class TodoModule { }
