import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {settingsNavMenuItems} from "../../../mocks/settings";
import {CardComponent} from "../../lib/card/card.component";
import {FormRendererComponent} from "../../lib/form/form-renderer.component";
import {FormRendererModel} from "../../lib/form/form-renderer.model";
import {createFormGroupByFields} from "../../lib/form/form-renderer.utils";
import {IconComponent} from "../../lib/icon/icon.component";
import {NavItem} from "../../lib/nav-item/nav-item.model";
import {NavMenuComponent} from "../../lib/nav-menu/nav-menu.component";
import {profileFields} from "./settings-fields.model";

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

    constructor(private activatedRoute: ActivatedRoute) {
        console.log(">>> CONSTR: ", this.activatedRoute.url);
    }

    public profileForm: FormRendererModel = {
        fields: profileFields,
        form: createFormGroupByFields(profileFields),
    };

    public navChanged(navItem: NavItem) {
        console.log(">>> navItem: ", navItem);
    }
}
