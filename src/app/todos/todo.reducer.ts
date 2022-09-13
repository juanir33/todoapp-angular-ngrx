import { createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from './todo.actions';



export const initialState: Todo[] = [
    new Todo("Ir a pagar el alquielr"),
    new Todo('Entrevista con Martu'),
    {text: "estoy en true", _id: 12345, completed: true  }
];

export const todoReducer = createReducer(
    initialState,
    on(actions.createTodo, (state, {text})=> [...state, new Todo(text)]),
    on(actions.toggleTodo, (state, {_id}) => {
        return state.map( todo => {
            if( todo._id === _id){
            return {
                ...todo,
                completed: !todo.completed
            }}
            return todo;
        })
    }), 
    on(actions.editTodo, (state, {_id, text} ) => {
        return state.map( todo => {
            if( todo._id === _id){
            return {
                ...todo,
                text: text
            }}
            return todo;
        })
    }),
    on(actions.deleteTodo, (state, {_id} ) => {
        return state.filter( todo => todo._id !== _id);
    }),
    on(actions.toggleAllTodo, (state ) => {
        return state.map( todo => {
           
            return {
                ...todo,
                completed: true
            }}
            
        );}))
