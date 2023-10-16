import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {settingsNavMenuItems} from "../../../mocks/settings";
import {CardComponent} from "../../lib/card/card.component";
import {NavMenuComponent} from "../../lib/nav-menu/nav-menu.component";

@Component({
    selector: "ets-settings",
    standalone: true,
    imports: [
        CommonModule,
        NavMenuComponent,
        CardComponent,
    ],
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
    public navMenuItems = settingsNavMenuItems;
}
