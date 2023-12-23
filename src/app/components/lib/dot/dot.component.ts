import {NgStyle} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";

@Component({
    selector: "ets-dot",
    templateUrl: "./dot.component.html",
    styleUrls: ["./dot.component.less"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgStyle,
    ],
})
export class DotComponent {
    @Input() public color: string;
}
