import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
} from "@angular/core";
import {
    EtcIconMode,
    EtcIconType,
} from "./icon.model";

@Component({
    selector: "ets-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    @HostBinding("class") public hostClass = "ets-icon";
    @Input() public icon: EtcIconType;
    @Input() public viewBox: string = "0 0 1 1";
    @Input() public mode: EtcIconMode = EtcIconMode.FILL;

    // stroke-width="1.5"

}
