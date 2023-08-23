import {Action, createReducer, on} from "@ngrx/store";
import {AuthState, initialAuthState} from "../models/auth.state";
import * as authActions from '../actions/auth.actions';

const reducer = createReducer(
    initialAuthState,
    on(authActions.loginSuccess, (state, { profile, isLoggedIn }) => {
        return {
            ...state,
            profile,
            isLoggedIn,
        };
    }),
    on(authActions.logout, (state, {}) => {
        return {
            ...state,
            profile: null,
            isLoggedIn: false,
        };
    })
);

export function authReducer(
    state: AuthState | undefined,
    action: Action
): AuthState {
    return reducer(state, action);
}
