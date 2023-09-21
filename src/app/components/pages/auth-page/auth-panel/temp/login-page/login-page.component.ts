import {
    HttpClient,
    HttpHeaders,
} from "@angular/common/http";
import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
} from "@angular/core";
import {
    DomSanitizer,
    EventManager,
} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AuthService} from "../../../../../../auth/auth.service";
import {mediaBtnList, MediaButton, MediaButtonType} from "./login-page.model";

@Component({
    selector: 'ets-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit, AfterViewChecked {

    constructor(
        private oidcSecurityService: OidcSecurityService,
        private sanitizer: DomSanitizer,
        private httpClient: HttpClient,
        private cdr: ChangeDetectorRef,
        private eventManager: EventManager,
        private authService: AuthService,
        private router: Router,
    ) {
    }

    public mediaButtons: MediaButton[] = mediaBtnList;

    ngOnInit(): void {
        this.login();
        window.addEventListener('message',function(message: MessageEvent<any>){
            console.log(message);
        });
    }

    ngAfterViewChecked(): void {
        // const x = document.getElementById("inlineFrameExample");
        // console.log(x);
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
        console.log("login clicked");
        // this.store.dispatch(login());
        this.oidcSecurityService.getAuthorizeUrl().subscribe((value) => {
            console.log(value);
            // this.result = value;

            this.result = this.sanitizer.bypassSecurityTrustResourceUrl(value);
            this.cdr.markForCheck();
            this.cdr.detectChanges();
            console.log(value);
            const result = value.replace("8081", "4200");
            console.log(result);
            // fetch(result)
            //     .then(res => {
            //         console.log(res);
            //     });
            this.httpClient
                .get<any>(result, { headers: headers, responseType: "text" as any })
                .subscribe((result: any) => {
                    // console.log(result);
                    // this.result = result;
                });
        });
        // this.oidcSecurityService.authorize();
    }

    public handleMediaChange(type: MediaButtonType) {
        switch (type) {
            case "google":
            case "twitter":
            case "facebook":
                break;
            default:
                const errorType: unknown = type;
                console.warn("unknown type: ", errorType);
        }
    }

    test123() {
        const x = document.getElementById("inlineFrameExample");
        // console.log(x);
        console.log((x as any)?.contentWindow);
        const content = (x as any)?.contentWindow;
        // console.log((x as any)?.contentWindow?.document);
        document.addEventListener("click", () => {
            console.log('clicked');
        })
        this.eventManager.addEventListener(content, 'click', (evt: any) => {
            console.log('clicked');
            console.log(evt);
        })
    }

    public handleSignUp(): void {
        this.router.navigateByUrl('courses');
        this.authService.isLoggedIn$.next(true);
    }
}
