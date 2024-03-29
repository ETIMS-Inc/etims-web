import {
    AsyncPipe,
    NgForOf,
    NgIf,
} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {
    NavigationEnd,
    Router,
} from "@angular/router";
import {
    filter,
    map,
    Observable,
} from "rxjs";
import {coreSidebarNavGroups} from "../../mocks/sidebar";
import {IconComponent} from "../lib/icon/icon.component";
import {
    CoreSidebarMode,
    CoreSidebarNavGroup,
    CoreSidebarNavItem,
} from "./core-sidebar.model";
import {SidebarNavItemComponent} from "./sidebar-nav-item/sidebar-nav-item.component";

const expandControl: Record<"expand" | "collapse", CoreSidebarNavItem> = {
    expand: {
        name: "Expand",
        icon: "chevrons-right-arrows",
    },
    collapse: {
        name: "Collapse",
        icon: "chevrons-left-arrows",
    },
};

const expandedSidebarWidth = 200;

@Component({
    selector: "ets-core-sidebar",
    templateUrl: "./core-sidebar.component.html",
    styleUrls: ["./core-sidebar.component.less"],
    standalone: true,
    imports: [
        AsyncPipe,
        IconComponent,
        NgForOf,
        NgIf,
        SidebarNavItemComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreSidebarComponent {
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Input() public navGroups: CoreSidebarNavGroup[] = coreSidebarNavGroups;

    public width: number = undefined;
    public currentUrl: Observable<string>;
    public expandControlItem: CoreSidebarNavItem = expandControl["expand"];

    constructor(private router: Router) {
        this.currentUrl = router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(event => (event as NavigationEnd).urlAfterRedirects),
        );
    }

    public itemClicked(item: CoreSidebarNavItem): void {
        this.router.navigateByUrl(item.url);
    }

    public changeDisplayMode(): void {
        if (this.mode === CoreSidebarMode.Collapsed) {
            this.mode = CoreSidebarMode.Full;
            this.expandControlItem = expandControl.collapse;
            this.width = expandedSidebarWidth;
        } else {
            this.mode = CoreSidebarMode.Collapsed;
            this.expandControlItem = expandControl.expand;
            this.width = undefined;
        }
    }
}
