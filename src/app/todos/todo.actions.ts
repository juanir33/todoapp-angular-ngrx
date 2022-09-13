import { createAction, props } from "@ngrx/store";


export const createTodo = createAction(
    '[TODO] create',
    props<{text:string}>()
    );

export const toggleTodo = createAction(
    '[TODO] toggle',
    props<{_id: number}>()
)
export const toggleAllTodo = createAction(
    '[TODO] toggleAll'
    
)

export const editTodo = createAction(
    '[TODO] edit',
    props<{_id: number, text: string}>()
)

export const deleteTodo = createAction(
    '[TODO] delete',
    props<{_id: number}>()
)