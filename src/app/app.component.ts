import {HttpClient} from "@angular/common/http";
import {
    Component,
    Inject,
    OnDestroy,
    OnInit,
} from "@angular/core";
import {
    select,
    Store,
} from "@ngrx/store";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {
    I18NEXT_SERVICE,
    ITranslationService,
} from "angular-i18next";
import {SvgIconRegistryService} from "angular-svg-icon";
import {
    Observable,
    of,
    Subscription,
} from "rxjs";
import {catchError} from "rxjs/operators";
import {
    checkAuth,
    login,
    logout,
} from "./store/actions/auth.actions";
import {selectIsAuthenticated} from "./store/selectors/auth.selectors";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"],
})
export class AppComponent implements OnInit, OnDestroy {
    isAuthenticated$: Observable<boolean>;
    public language: string = "en";
    public readonly languages: string[] = [
        "en",
        "de",
    ];
    public title = "etims-landing-ui";
    private iconRegSubscription: Subscription | undefined = new Subscription();

    constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService,
                private httpClient: HttpClient,
                private iconReg: SvgIconRegistryService,
                private oidcSecurityService: OidcSecurityService,
                private store: Store<any>) {
    }

    public ngOnInit(): void {
        // this.store.dispatch(checkAuth());
        // this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));

        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData}) => {
            console.log(isAuthenticated);
            console.log(userData);
        });

        this.iconReg.loadSvg("assets/icons/logo.svg", "logo")?.subscribe();
        this.iconReg.loadSvg("assets/icons/global.svg", "global")?.subscribe();
        this.iconReg.loadSvg("assets/icons/search.svg", "search")?.subscribe();
        this.iconReg.loadSvg("assets/icons/dark-mode.svg", "dark-mode")?.subscribe();
        this.iconReg.loadSvg("assets/icons/white-mode.svg", "white-mode")?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/english.svg", "english")?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/germany.svg", "germany")?.subscribe();
        this.iconReg.loadSvg("assets/icons/flags/ukraine.svg", "ukraine")?.subscribe();
        this.iconReg.loadSvg("assets/icons/social-media/facebook.svg", "facebook")?.subscribe();
        this.iconReg.loadSvg("assets/icons/social-media/google.svg", "google")?.subscribe();
        this.iconReg.loadSvg("assets/icons/social-media/twitter.svg", "twitter")?.subscribe();
        this.i18NextService.events.initialized.subscribe((e) => {
            if (e) {
                this.updateState(this.i18NextService.language);
            }
        });
    }

    login() {
        // console.log(window.location.origin);
        // console.log("login clicked");
        // this.store.dispatch(login());
        this.oidcSecurityService.getAuthorizeUrl().subscribe((value) => {
            console.log(value);
            this.httpClient
                .get(value, {headers: { 'Sec-Fetch-Mode': 'document' }})
                .subscribe((result) => {
                    console.log(result);
                });
        });
        // this.oidcSecurityService.authorize();
    }

    logout() {
        // this.store.dispatch(logout());
        this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
    }

    public changeLanguage(lang: string): void {
        if (lang !== this.i18NextService.language) {
            this.i18NextService.changeLanguage(lang).then(x => {
                this.updateState(lang);
                document.location.reload();
            });
        }
    }

    public ngOnDestroy(): void {
        this.iconRegSubscription?.unsubscribe();
    }

    private updateState(lang: string): void {
        this.language = lang;
    }
}
