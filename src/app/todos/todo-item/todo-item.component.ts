import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { editTodo, toggleTodo, deleteTodo, toggleAllTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoLabel!: Todo;
  @ViewChild('editInput') inputEdit!: ElementRef;

  checkStatus!: FormControl;
  textInput!: FormControl;
  editing: boolean =  false;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
   
    this.checkStatus = new FormControl(this.todoLabel.completed);
    this.textInput = new FormControl(this.todoLabel.text, Validators.required)
  }
  onBlur(){
    this.editing = false;
    
    if(this.textInput.invalid){return ;}
    if(this.textInput.value === this.todoLabel.text){return;}
    this.store.dispatch(
      editTodo({
        _id: this.todoLabel._id,
        text: this.textInput.value,
      })
    )
  }

  edit(){
    this.editing = true;

    setTimeout(()=> {
      this.inputEdit.nativeElement.select()
    })


    
  }

  toggleInput(id: number){
    this.store.dispatch(toggleTodo({_id: id}));
    console.log(id);
    
  }

  deleteTodo(){
    this.store.dispatch(deleteTodo({_id: this.todoLabel._id}));
  }

 

}
