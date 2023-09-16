import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {etsIconList} from "../../lib/icon/icons.list";

@Component({
    selector: "ets-icons-page",
    templateUrl: "./icons-page.component.html",
    styleUrls: ["./icons-page.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsPageComponent {
    public etsIconList = etsIconList;
}
