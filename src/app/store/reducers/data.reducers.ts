import {Action, createReducer, on} from "@ngrx/store";
import * as dataActions from '../actions/data.actions';
import {
    DataState,
    initialDataState,
} from "../models/data.state";

const reducer = createReducer(
    initialDataState,
    on(dataActions.getDataSuccess, (state, { data }) => {
        return {
            ...state,
            data,
        };
    }),
);

export function dataReducer(
    state: DataState | undefined,
    action: Action
): DataState {
    return reducer(state, action);
}
