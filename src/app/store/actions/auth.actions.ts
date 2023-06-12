import { createAction, props } from "@ngrx/store";

const enum Action {
    LoadAuthToken = "[Auth] Load auth token",
    LoadAuthTokenSuccess = "[Auth] Load auth token success",
    LoadAuthTokenFailure = "[Auth] Load auth token failure",
}

export const loadAuthToken = createAction(
    Action.LoadAuthToken,
);

export const loadAuthTokenSuccess = createAction(
    Action.LoadAuthTokenSuccess,
    props<{ token: string }>(),
);

export const loadAuthTokenFailure = createAction(
    Action.LoadAuthTokenFailure,
);
