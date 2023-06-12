import {Action, createReducer, on} from "@ngrx/store";
import {AuthState, initialAuthState} from "../models/auth.state";
import {loadAuthTokenSuccess} from "../actions/auth.actions";

const reducer = createReducer(
    initialAuthState,
    on(
        loadAuthTokenSuccess, (state) => ({
            ...state,
            param1: "",
            param2: "",
        }),
    ),
)

export function authReducer(
    state: AuthState | undefined,
    action: Action
): AuthState {
    return reducer(state, action);
}
