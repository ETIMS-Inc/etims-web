import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {
    mediaBtnList,
    MediaButton,
} from "../media-button.model";

@Component({
    selector: "ets-sign-in",
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
    ],
    templateUrl: "./sign-in.component.html",
    styleUrls: ["../auth-panel-item.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {

    public result: any;
    public mediaButtons: MediaButton[] = mediaBtnList;
    protected readonly mediaBtnList = mediaBtnList;

    constructor(
        // private oidcSecurityService: OidcSecurityService,
        //
        // private sanitizer: DomSanitizer,
        // private httpClient: HttpClient,
        // private cdr: ChangeDetectorRef,
    ) {
    }

    public ngOnInit(): void {
        // let headers = new HttpHeaders()
        // headers=headers.append('content-type','text/html')
        // headers=headers.append('Access-Control-Allow-Origin', '*')
        // headers=headers.append('customer-header', 'custom')
        //
        // this.oidcSecurityService.getAuthorizeUrl().subscribe((value) => {
        //     console.log(value);
        //     // this.result = value;
        //
        //     this.result = this.sanitizer.bypassSecurityTrustResourceUrl(value);
        //     this.cdr.markForCheck();
        //     this.cdr.detectChanges();
        //     console.log(value);
        //     const result = value.replace("8081", "4200");
        //     console.log(result);
        //     // fetch(result)
        //     //     .then(res => {
        //     //         console.log(res);
        //     //     });
        //     this.httpClient
        //         .get<any>(result, { headers: headers, responseType: "text" as any })
        //         .subscribe((result: any) => {
        //             // console.log(result);
        //             // this.result = result;
        //         });
        // });

    }
}
