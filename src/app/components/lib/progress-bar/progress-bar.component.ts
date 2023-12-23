import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {ProgressBarModule} from "primeng/progressbar";

@Component({
    selector: "ets-progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.less"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ProgressBarModule,
    ],
})
export class ProgressBarComponent {
    @Input() public progress: number = 0;
}
