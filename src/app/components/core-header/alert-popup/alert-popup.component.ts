import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {PreviewItem} from "../preview-item/preview-item.model";

@Component({
    selector: "ets-alert-popup",
    templateUrl: "./alert-popup.component.html",
    styleUrls: ["./alert-popup.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertPopupComponent {
    @Input()
    public caption: string;
    @Input()
    public popupItems: PreviewItem[];
}
