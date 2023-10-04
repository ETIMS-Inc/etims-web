import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";

@Component({
    selector: "ets-sign-up",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./sign-up.component.html",
    styleUrls: ["../temp/keycloak-auth.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {

}
