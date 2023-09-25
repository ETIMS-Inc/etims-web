import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {AuthMode} from "../auth-page.model";
import {SignInComponent} from "./keycloak-forms/sign-in/sign-in.component";
import {SignUpComponent} from "./keycloak-forms/sign-up/sign-up.component";

@Component({
    selector: "ets-auth-panel",
    standalone: true,
    imports: [
        CommonModule,
        SignUpComponent,
        SignInComponent,
        SignUpComponent,
    ],
    templateUrl: "./auth-panel.component.html",
    styleUrls: ["./auth-panel.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPanelComponent {
    @Input() public mode: AuthMode;
    public authMode = AuthMode;
}
