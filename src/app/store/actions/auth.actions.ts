import { createAction, props } from "@ngrx/store";

const enum Action {
    CheckAuth = "[Auth] Check auth",
    CheckAuthSuccess = "[Auth] Check auth success",
    CheckAuthFailure = "[Auth] Check auth failure",
    Login = "[Auth] Login",
    LoginSuccess = "[Auth] Login success",
    LoginFailure = "[Auth] Login failure",
    Logout = "[Auth] Logout",
    LogoutSuccess = "[Auth] Logout success",
    LogoutFailure = "[Auth] Logout failure",
}

export const checkAuth = createAction(
    Action.CheckAuth,
);

export const checkAuthSuccess = createAction(
    Action.CheckAuthSuccess,
    props<{ isLoggedIn: boolean }>(),
);

export const checkAuthFailure = createAction(
    Action.CheckAuthFailure,
);

export const login = createAction(
    Action.Login,
);

export const loginSuccess = createAction(
    Action.LoginSuccess,
    props<{ profile: any, isLoggedIn: boolean }>(),
);

export const loginFailure = createAction(
    Action.LoginFailure,
);

export const logout = createAction(
    Action.Logout,
);

export const logoutSuccess = createAction(
    Action.LogoutSuccess,
);

export const logoutFailure = createAction(
    Action.LogoutFailure,
);
