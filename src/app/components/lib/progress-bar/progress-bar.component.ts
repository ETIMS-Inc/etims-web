import {
    Component,
    Input,
} from "@angular/core";

@Component({
    selector: "ets-progress-bar",
    templateUrl: "./progress-bar.component.html",
    styleUrls: ["./progress-bar.component.less"],
})
export class ProgressBarComponent {
    @Input() public progress: number = 0;
}
