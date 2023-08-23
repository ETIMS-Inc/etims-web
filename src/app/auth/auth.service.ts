import {Injectable} from "@angular/core";
import {AuthenticatedResult} from "angular-auth-oidc-client/lib/auth-state/auth-result";
import {
    BehaviorSubject,
    Observable,
    of,
} from "rxjs";
import {
    LoginResponse,
    OidcSecurityService,
    UserDataResult,
} from "angular-auth-oidc-client";

@Injectable({providedIn: "root"})
export class AuthService {
    constructor(private oidcSecurityService: OidcSecurityService) {
    }

    public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public get isLoggedIn(): Observable<AuthenticatedResult> {
        return this.oidcSecurityService.isAuthenticated$;
    }

    public get token(): Observable<string> {
        return this.oidcSecurityService.getIdToken();
    }

    public get userData(): Observable<UserDataResult> {
        return this.oidcSecurityService.userData$;
    }

    public checkAuth(): Observable<LoginResponse> {
        return this.oidcSecurityService.checkAuth();
    }

    public doLogin(): void {
        // return of(this.oidcSecurityService.authorize());
        this.oidcSecurityService.authorize();
    }

    public signOut(): void {
        this.oidcSecurityService.logoffAndRevokeTokens();
    }
}
