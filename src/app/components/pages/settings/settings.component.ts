import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {settingsNavMenuItems} from "../../../mocks/settings";
import {CardComponent} from "../../lib/card/card.component";
import {FormRendererComponent} from "../../lib/form/form-renderer.component";
import {FormRendererModel} from "../../lib/form/form-renderer.model";
import {getRendererForm} from "../../lib/form/form-renderer.utils";
import {IconComponent} from "../../lib/icon/icon.component";
import {NavItem} from "../../lib/nav-item/nav-item.model";
import {NavMenuComponent} from "../../lib/nav-menu/nav-menu.component";
import {
    settingsNavFormFields,
    SettingsTabs,
} from "./settings.model";
import {getSettingsTabByPath} from "./settings.utils";

@Component({
    selector: "ets-settings",
    standalone: true,
    imports: [
        CommonModule,
        NavMenuComponent,
        CardComponent,
        FormRendererComponent,
        ButtonModule,
        IconComponent,
    ],
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
    public navMenuItems: NavItem[] = settingsNavMenuItems;

    public form: FormRendererModel = getRendererForm(settingsNavFormFields[SettingsTabs.Profile]);

    constructor(private cdr: ChangeDetectorRef) {
    }

    public navChanged(navItem: NavItem) {
        this.form = getRendererForm(settingsNavFormFields[getSettingsTabByPath(navItem.url)]);
        this.cdr.detectChanges();
    }
}
