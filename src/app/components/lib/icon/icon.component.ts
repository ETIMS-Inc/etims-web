import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
} from "@angular/core";
import {EtcIconType} from "./icon.model";

@Component({
    selector: "ets-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    @HostBinding("class") public hostClass = "ets-icon";
    @Input() public icon: EtcIconType;
}
