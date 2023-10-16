import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";

@Component({
    selector: "ets-card",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
}
