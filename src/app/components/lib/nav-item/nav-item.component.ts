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
import {ChipComponent} from "../chip/chip.component";
import {DotComponent} from "../dot/dot.component";
import {IconComponent} from "../icon/icon.component";
import {
    NavItemChipType,
    NavItem,
    NavItemDisplayMode,
} from "./nav-item.model";

@Component({
    selector: "ets-nav-item",
    templateUrl: "./nav-item.component.html",
    styleUrls: ["./nav-item.component.less"],
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
export class NavItemComponent {
    @Output() public itemClicked: EventEmitter<NavItem> = new EventEmitter();
    public _item: NavItem;
    public _currentUrl: string;
    public _mode: NavItemDisplayMode = NavItemDisplayMode.Collapsed;
    public sidebarMode = NavItemDisplayMode;
    public displayNestedItems = false;
    public nestedUrls: string[] = [];
    public nestedItemSelected: boolean;
    public coreSidebarNavItem: NavItem;

    public chipColors: Record<NavItemChipType, string> = {
        [NavItemChipType.WARNING]: Color.Warning,
        [NavItemChipType.INFO]: Color.Info,
    }

    @Input()
    public set item(value: NavItem) {
        this._item = value;

        if (value.childrenItems) {
            this.nestedUrls = value.childrenItems.map(item => item.url);
        }
    }

    @Input()
    public set currentUrl(value: string) {
        this._currentUrl = value;

        this.nestedItemSelected = this.nestedUrls.includes(value);
    }

    @Input()
    public set mode(value: NavItemDisplayMode) {
        this._mode = value;
        this.displayNestedItems = this.nestedItemSelected;
    }

    public toggleDisplayNestedItems(): void {
        this.displayNestedItems = !this.displayNestedItems;
    }

    public navItemClicked(navItem: NavItem): void {
        if (this._mode === NavItemDisplayMode.Collapsed) {
            this.itemClicked.emit(navItem);
        } else {
            navItem.childrenItems ? this.toggleDisplayNestedItems() : this.itemClicked.emit(navItem);
        }
    }
}
