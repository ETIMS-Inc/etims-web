import {
    NgClass,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import {TooltipModule} from "primeng/tooltip";
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
        NgClass,
    ],
})
export class SidebarNavItemComponent {
    @Input() public item: CoreSidebarNavItem;
    @Input() public mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    @Input() public currentUrl: string;
    @Output() public itemClicked: EventEmitter<CoreSidebarNavItem> = new EventEmitter();
    public sidebarMode = CoreSidebarMode;
    public displayNestedItems = false;

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
