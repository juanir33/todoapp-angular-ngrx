import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  new_todo: FormControl;
  constructor( private store: Store<AppState> ) { 
    this.new_todo = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  addTask(){
    if(this.new_todo.invalid){return;}

    this.store
    .dispatch(
      actions.createTodo(
        {text: this.new_todo.value}
        ));

    this.new_todo.reset();
  }

}
