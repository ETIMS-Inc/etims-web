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
    /**
     * Mock data
     */
    public popupItems: PreviewItem[] = [{
        description: "Hello, Mr John  i am yet to get your class b restart",
        userName: "Adepoju Ademola",
        shape: "circle",
        time: "6 min ago",
        image: "https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
    }];

}
