import { createAction, props } from "@ngrx/store";

export type validFilters = 'all' | 'completed' | 'pending';

export const filterAll = createAction(
    '[FILTER todo] filterAll',
    props<{filtro: string}>()
)

export const filterCompleted = createAction(
    '[FILTER todo] completed',
    props<{filtro: validFilters}>()
)


