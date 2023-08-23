import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {
    Actions,
    createEffect,
    ofType,
} from "@ngrx/effects";
import {TypedAction} from "@ngrx/store/src/models";
import {
    LoginResponse,
    UserDataResult,
} from "angular-auth-oidc-client";
import {
    Observable,
    of,
    switchMap,
    tap,
} from "rxjs";
import {Action} from "rxjs/internal/scheduler/Action";
import {
    catchError,
    map,
} from "rxjs/operators";
import {AuthService} from "../../auth/auth.service";
import {
    checkAuth,
    checkAuthSuccess,
    checkAuthFailure,
    login,
    loginSuccess,
    loginFailure,
    logout,
    logoutSuccess,
    logoutFailure,
} from "../actions/auth.actions";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) {
    }

    public login$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(login),
                tap(() => this.authService.doLogin()),
            ),
        {dispatch: false},
    );

    public checkAuth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(checkAuth),
            switchMap(() =>
                this.authService
                    .checkAuth()
                    .pipe(
                        map((response: LoginResponse) =>
                            checkAuthSuccess({isLoggedIn: response?.isAuthenticated}),
                        ),
                    ),
            ),
        ),
    );

    public checkAuthComplete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(checkAuthSuccess),
            switchMap(({isLoggedIn}) => {
                if (isLoggedIn) {
                    return this.authService.userData.pipe(
                        map((profile: UserDataResult) =>
                            loginSuccess({profile, isLoggedIn}),
                        ),
                    );
                }
                return of(loginSuccess(null));
            }),
        ),
    );

    public logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logout),
            map(() => logoutSuccess()),
        ),
    );

    public logoutComplete$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logoutSuccess),
                tap(() => {
                    this.router.navigate(["/"]);
                }),
            ),
        {dispatch: false},
    );

}
