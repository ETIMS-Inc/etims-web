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
import {IconComponent} from "../lib/icon/icon.component";
import {
    CoreSidebarMode,
    CoreSidebarNavGroup,
} from "./core-sidebar.model";
import {NavItemComponent} from "../lib/nav-item/nav-item.component";
import {NavItem} from "../lib/nav-item/nav-item.model";

const expandControl: Record<"expand" | "collapse", NavItem> = {
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
        NavItemComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreSidebarComponent {
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Input() public navGroups: CoreSidebarNavGroup[];
    @Input() public navBottomGroups: CoreSidebarNavGroup[];

    public width: number = undefined;
    public currentUrl: Observable<string>;
    public expandControlItem: NavItem = expandControl["expand"];

    constructor(private router: Router) {
        this.currentUrl = router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(event => (event as NavigationEnd).urlAfterRedirects),
        );
    }

    public itemClicked(item: NavItem): void {
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
