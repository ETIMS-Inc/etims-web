import {createSelector} from "@ngrx/store";
import {AuthState} from "../models/auth.state";
import {EtsState} from "../state";

export const getAuthState = (state: EtsState) => state?.authState;

export const selectIsAuthenticated = createSelector(
    getAuthState,
    (state: AuthState) => state.isLoggedIn,
);

export const selectUserInfo = createSelector(
    getAuthState,
    (state: AuthState) => state.profile,
);
