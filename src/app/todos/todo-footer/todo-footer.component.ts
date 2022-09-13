import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterAll, validFilters } from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { deleteAllTodoCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  activeFilter: string = 'all';
  filters: string[] = ['all', 'completed', 'pending'];
  pendingTodos: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filter').subscribe((filter) => {
      this.activeFilter = filter;
    });

    this.store.select('todos').subscribe((todos) => {
      let pendings = todos.filter((todo) => !todo.completed);
      this.pendingTodos = pendings.length;
    });
  }

  filterTodos(_filter: string) {
    this.store.dispatch(filterAll({ filtro: _filter }));
  }

  clearCompleted(){
    this.store.dispatch(deleteAllTodoCompleted())
  }
}
