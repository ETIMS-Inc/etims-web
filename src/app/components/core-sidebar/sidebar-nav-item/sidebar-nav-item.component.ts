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
import {I18NextModule} from "angular-i18next";
import {TooltipModule} from "primeng/tooltip";
import {Color} from "../../../models/colors";
import {EtsAsPipe} from "../../../pipes/as.pipe";
import {ChipComponent} from "../../lib/chip/chip.component";
import {DotComponent} from "../../lib/dot/dot.component";
import {IconComponent} from "../../lib/icon/icon.component";
import {
    CoreSidebarChipType,
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
        I18NextModule,
        IconComponent,
        NgClass,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        TooltipModule,
        ChipComponent,
        EtsAsPipe,
        DotComponent,
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
    public coreSidebarNavItem: CoreSidebarNavItem;

    public chipColors: Record<CoreSidebarChipType, string> = {
        [CoreSidebarChipType.WARNING]: Color.Warning,
        [CoreSidebarChipType.INFO]: Color.Info,
    }

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
        this.displayNestedItems = this.nestedItemSelected;
    }

    public toggleDisplayNestedItems(): void {
        this.displayNestedItems = !this.displayNestedItems;
    }

    public navItemClicked(navItem: CoreSidebarNavItem): void {
        if (this._mode === CoreSidebarMode.Collapsed) {
            this.itemClicked.emit(navItem);
        } else {
            navItem.childrenItems ? this.toggleDisplayNestedItems() : this.itemClicked.emit(navItem);
        }
    }
}
