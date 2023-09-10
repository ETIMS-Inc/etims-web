import {
    NgForOf,
    NgIf,
    NgTemplateOutlet,
} from "@angular/common";
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from "@angular/core";
import {
    NavigationEnd,
    Router,
} from "@angular/router";
import {TooltipModule} from "primeng/tooltip";
import {filter} from "rxjs";
import {IconComponent} from "../../lib/icon/icon.component";
import {
    CoreSidebarMode,
    CoreSidebarNavItem,
} from "../core-sidebar.model";

@Component({
    selector: "ets-sidebar-nav-item",
    templateUrl: "./sidebar-nav-item.component.html",
    styleUrls: ["./sidebar-nav-item.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        IconComponent,
        TooltipModule,
        NgTemplateOutlet,
        NgForOf,
    ],
})
export class SidebarNavItemComponent implements AfterViewInit{
    @Input() public item: CoreSidebarNavItem;
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Output() public itemClicked: EventEmitter<CoreSidebarNavItem> = new EventEmitter();
    public sidebarMode = CoreSidebarMode;
    public displayNestedItems = false;

    constructor(public router: Router) {
        router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event =>
            {
                console.log(">>> EVENT: ", event);
            });
    }

    public ngAfterViewInit(): void {
        console.log(">>> ", this.router.url);
    }

    public toggleDisplayNestedItems() {
        this.displayNestedItems = !this.displayNestedItems;
    }

    public navItemClicked(navItem: CoreSidebarNavItem) {
        if (this.mode === CoreSidebarMode.Collapsed) {
            this.itemClicked.emit(navItem);
        } else {
            navItem.childrenItems ? this.toggleDisplayNestedItems() : this.itemClicked.emit(navItem);
        }
    }
}
