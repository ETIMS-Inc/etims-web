import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    HostBinding,
    OnInit,
} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
    ActivatedRoute,
    Router,
} from "@angular/router";
import {RoutePath} from "../../../models/app-routing.model";
import {
    AuthMode,
    AuthPageFlexDirection,
    InfoPanelContent,
} from "./auth-page.model";
import {AuthPanelComponent} from "./auth-panel/auth-panel.component";
import {InfoPanelComponent} from "./info-panel/info-panel.component";
import {InfoPanelModel} from "./info-panel/info-panel.model";

@Component({
    selector: "ets-auth-page",
    standalone: true,
    imports: [
        CommonModule,
        InfoPanelComponent,
        AuthPanelComponent,
    ],
    templateUrl: "./auth-page.component.html",
    styleUrls: ["./auth-page.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
    public mode: AuthMode;
    public model: InfoPanelModel;

    @HostBinding("style.flex-direction") private flexDirection = "row";

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private destroy$: DestroyRef) {
    }

    public ngOnInit() {
        this.activatedRoute.data
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(data => {
                this.mode = data["mode"];
                this.model = InfoPanelContent[this.mode];
                this.flexDirection = AuthPageFlexDirection[this.mode];
            });
    }

    public changeMode() {
        this.router.navigate([
            this.mode === AuthMode.SIGN_IN
                ? RoutePath.SignUp
                : RoutePath.SignIn
        ]);
    }
}
