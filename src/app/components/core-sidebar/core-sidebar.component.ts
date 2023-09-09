import {
    NgForOf,
    NgIf,
} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {Router} from "@angular/router";
import {TooltipModule} from "primeng/tooltip";
import {coreSidebarNavGroups} from "../../mocks/sidebar";
import {IconComponent} from "../lib/icon/icon.component";
import {
    CoreSidebarMode,
    CoreSidebarNavGroup,
    CoreSidebarNavItem,
} from "./core-sidebar.model";

@Component({
    selector: "ets-core-sidebar",
    templateUrl: "./core-sidebar.component.html",
    styleUrls: ["./core-sidebar.component.less"],
    standalone: true,
    imports: [
        NgForOf,
        IconComponent,
        NgIf,
        TooltipModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreSidebarComponent {
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Input() public navGroups: CoreSidebarNavGroup[] = coreSidebarNavGroups;

    public width: number = undefined;
    public sidebarMode = CoreSidebarMode;

    constructor(private router: Router) {
    }

    public itemClicked(item: CoreSidebarNavItem) {
        this.router.navigateByUrl(item.url);
    }

    public changeDisplayMode() {
        if (this.mode === CoreSidebarMode.Collapsed) {
            this.mode = CoreSidebarMode.Full;
            this.width = 180;
        } else {
            this.mode = CoreSidebarMode.Collapsed;
            this.width = undefined;
        }
    }
}
