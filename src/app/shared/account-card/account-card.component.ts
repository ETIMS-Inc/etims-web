import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";

@Component({
    selector: "ets-account-card",
    templateUrl: "./account-card.component.html",
    styleUrls: ["./account-card.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCardComponent {
}
