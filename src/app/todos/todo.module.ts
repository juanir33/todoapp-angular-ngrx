import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    TodoPageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TodoPageComponent ]
})
export class TodoModule { }
