import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {AuthMode} from "../auth-page.model";
import {KeycloakSignInComponent} from "./temp/keycloak-sign-in/keycloak-sign-in.component";
import {KeycloakSignUpComponent} from "./temp/keycloak-sign-up/keycloak-sign-up.component";

@Component({
    selector: "ets-auth-panel",
    standalone: true,
    imports: [
        CommonModule,
        KeycloakSignInComponent,
        KeycloakSignUpComponent,
    ],
    templateUrl: "./auth-panel.component.html",
    styleUrls: ["./auth-panel.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPanelComponent {
    @Input() public mode: AuthMode;
    public authMode = AuthMode;
}
