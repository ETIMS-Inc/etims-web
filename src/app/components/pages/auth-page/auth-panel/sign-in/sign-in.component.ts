import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {Router} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {RoutePath} from "../../../../../models/app-routing.model";
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
export class SignInComponent {
    public mediaButtons: MediaButton[] = mediaBtnList;

    constructor(private router: Router) {
    }

    public recoverPassword(): void {
        this.router.navigateByUrl(RoutePath.RecoverPassword);
    }
}
