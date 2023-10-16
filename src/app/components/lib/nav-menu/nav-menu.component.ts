import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {CardComponent} from "../card/card.component";
import {NavItemComponent} from "../nav-item/nav-item.component";
import {
    NavItem,
    NavItemDisplayMode,
} from "../nav-item/nav-item.model";

@Component({
    selector: "ets-nav-menu",
    standalone: true,
    imports: [
        CommonModule,
        NavItemComponent,
        CardComponent,
    ],
    templateUrl: "./nav-menu.component.html",
    styleUrls: ["./nav-menu.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
    @Input() public items: NavItem[];


    public navItemDisplayMode = NavItemDisplayMode;

}
