import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";

@Component({
    selector: "ets-sign-in",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./sign-in.component.html",
    styleUrls: ["../keycloak-auth.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {

}
