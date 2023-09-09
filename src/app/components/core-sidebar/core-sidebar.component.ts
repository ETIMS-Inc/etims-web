import {NgForOf} from "@angular/common";
import {
    Component,
    Input,
} from "@angular/core";
import {coreSidebarNavGroups} from "../../mocks/sidebar";
import {IconComponent} from "../lib/icon/icon.component";
import {
    CoreSidebarMode,
    CoreSidebarNavGroup,
} from "./core-sidebar.model";

@Component({
    selector: "ets-core-sidebar",
    templateUrl: "./core-sidebar.component.html",
    styleUrls: ["./core-sidebar.component.less"],
    standalone: true,
    imports: [
        NgForOf,
        IconComponent,
    ],
})
export class CoreSidebarComponent {
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Input() public navGroups: CoreSidebarNavGroup[] = coreSidebarNavGroups;
}
