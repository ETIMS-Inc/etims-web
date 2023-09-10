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
    @Output() public itemClicked: EventEmitter<CoreSidebarNavItem> = new EventEmitter();
    public _item: CoreSidebarNavItem;
    public _currentUrl: string;
    public _mode: CoreSidebarMode = CoreSidebarMode.Collapsed;
    public sidebarMode = CoreSidebarMode;
    public displayNestedItems = false;
    public nestedUrls: string[] = [];
    public nestedItemSelected: boolean;

    @Input()
    set item(value: CoreSidebarNavItem) {
        this._item = value;

        if (value.childrenItems) {
            this.nestedUrls = value.childrenItems.map(item => item.url);
        }
    }

    @Input()
    set currentUrl(value: string) {
        this._currentUrl = value;

        this.nestedItemSelected = this.nestedUrls.includes(value);
    }

    @Input()
    set mode(value: CoreSidebarMode) {
        this._mode = value;

        if (this.nestedItemSelected) {
            this.displayNestedItems = true;
        }
    }

    public toggleDisplayNestedItems() {
        this.displayNestedItems = !this.displayNestedItems;
    }

    public navItemClicked(navItem: CoreSidebarNavItem) {
        if (this._mode === CoreSidebarMode.Collapsed) {
            this.itemClicked.emit(navItem);
        } else {
            navItem.childrenItems ? this.toggleDisplayNestedItems() : this.itemClicked.emit(navItem);
        }
    }
}
