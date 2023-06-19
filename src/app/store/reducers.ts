/**
 * Use alphabetical order for reducers
 */
import { ActionReducerMap } from "@ngrx/store";
import { EtsState } from "./state";
import { authReducer } from "./reducers/auth.reducers";

export const etsReducers: ActionReducerMap<EtsState> = {
    authState: authReducer,
}
