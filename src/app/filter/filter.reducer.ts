import { createReducer, on } from '@ngrx/store';

import * as actions from './filter.actions';
import { validFilters } from './filter.actions';


const initialState: string = 'all';

export const filterReducer = createReducer(
    initialState,
    on(actions.filterAll, (state, {filtro}) => filtro),
    // on(actions.filterCompleted, (state, filter) => {
    //     return state.match(filter)
    // })
)