import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {AuthMode} from "../auth-page.model";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginPageModule} from "./temp/login-page/login-page.module";
import {RegisterPageModule} from "./temp/register-page/register-page.module";

@Component({
    selector: "ets-auth-panel",
    standalone: true,
    imports: [
        CommonModule,
        SignUpComponent,
        SignInComponent,
        SignUpComponent,
        LoginPageModule,
        RegisterPageModule,
    ],
    templateUrl: "./auth-panel.component.html",
    styleUrls: ["./auth-panel.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPanelComponent {
    @Input() public mode: AuthMode;
    public authMode = AuthMode;
}
