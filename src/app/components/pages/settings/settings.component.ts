import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";

@Component({
    selector: "ets-settings",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {

}
