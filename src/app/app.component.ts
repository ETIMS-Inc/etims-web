import {
    HttpClient,
    HttpHeaders,
} from "@angular/common/http";
import {
    ChangeDetectorRef,
    Component,
    OnInit,
} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {
    select,
    Store,
} from "@ngrx/store";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {
    BehaviorSubject,
    Observable,
    of,
    Subscription,
} from "rxjs";
import {
    catchError,
    map,
} from "rxjs/operators";
import {AuthService} from "./auth/auth.service";
import {
    checkAuth,
    login,
    logout,
} from "./store/actions/auth.actions";
import {selectIsAuthenticated} from "./store/selectors/auth.selectors";
import {coreSidebarNavGroups} from "./mocks/sidebar";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit {
    public title = "etims-web";
    // public isLoggedIn$: BehaviorSubject<boolean>;
    public isAuthenticated$: Observable<boolean>;
    public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(true);
    public sidebarGroups = coreSidebarNavGroups;

    constructor(
        protected _sanitizer: DomSanitizer,
        private oidcSecurityService: OidcSecurityService,
        private authService: AuthService,
        private httpClient: HttpClient,
        private cdr: ChangeDetectorRef,
        private store: Store<any>,
    ) { }

    public ngOnInit(): void {
        this.isLoggedIn$ = this.authService.isLoggedIn$;
        // this.store.dispatch(checkAuth());
        // this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
        this.oidcSecurityService.getAuthorizeUrl().subscribe((res) => {
            console.log(res);
        })

        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData}) => {
            console.log(isAuthenticated);
            console.log(userData);
        });
    }

    public result: any;

    login() {
        let headers = new HttpHeaders()
        headers=headers.append('content-type','text/html')
        headers=headers.append('Access-Control-Allow-Origin', '*')
        headers=headers.append('customer-header', 'custom')
        const headers123 = new HttpHeaders();
        headers123.set("Content-Type", "text/html");
        headers123.set("Accept", "text/html");
        // console.log(window.location.origin);
        // console.log("login clicked");
        // this.store.dispatch(login());
        this.oidcSecurityService.getAuthorizeUrl().subscribe((value) => {
            // this.result = value;

            this.result = this._sanitizer.bypassSecurityTrustResourceUrl(value);
            this.cdr.markForCheck();
            this.cdr.detectChanges();
            console.log(value);
            const result = value.replace("8081", "4200");
            this.httpClient
                .get<any>(result, { headers: headers, responseType: "text" as any })
                .subscribe((result: any) => {
                    // console.log(result);
                    // this.result = result;
                });
        });
        // this.oidcSecurityService.authorize();
    }

    logout() {
        // this.store.dispatch(logout());
        this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
    }
}
