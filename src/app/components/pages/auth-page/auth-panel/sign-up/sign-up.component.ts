import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {IconComponent} from "../../../../lib/icon/icon.component";
import {MediaButton, mediaBtnList} from "../media-button.model";

@Component({
    selector: "ets-sign-up",
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        PasswordModule,
        IconComponent,
        InputTextModule,
    ],
    templateUrl: "./sign-up.component.html",
    styleUrls: ["../keycloak-auth.less", "register-page.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
    public mediaButtons: MediaButton[] = mediaBtnList;

    protected readonly mediaBtnList = mediaBtnList;
}
