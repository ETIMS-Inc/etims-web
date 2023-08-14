import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {PreviewItem} from "./preview-item.model";

@Component({
    selector: "ets-preview-item",
    templateUrl: "./preview-item.component.html",
    styleUrls: ["./preview-item.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewItemComponent {

    @Input()
    public item: PreviewItem;
}
