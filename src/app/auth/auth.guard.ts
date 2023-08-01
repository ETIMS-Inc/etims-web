import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {AuthenticatedResult} from "angular-auth-oidc-client/lib/auth-state/auth-result";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isLoggedIn.pipe(
            map((authenticatedResult: AuthenticatedResult) => {
                if (!authenticatedResult?.isAuthenticated) {
                    this.router.navigate(['/unauthorized']);
                    return false;
                }
                return true;
            })
        );
    }
}
