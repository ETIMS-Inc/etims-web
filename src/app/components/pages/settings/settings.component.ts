import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {settingsNavMenuItems} from "../../../mocks/settings";
import {CardComponent} from "../../lib/card/card.component";
import {
    FormFieldModel,
    FormFieldType,
} from "../../lib/form/form-field/form-field.model";
import {FormRendererComponent} from "../../lib/form/form-renderer.component";
import {FormRendererModel} from "../../lib/form/form-renderer.model";
import {createFormGroupByFields} from "../../lib/form/form-renderer.utils";
import {IconComponent} from "../../lib/icon/icon.component";
import {NavMenuComponent} from "../../lib/nav-menu/nav-menu.component";
import {profileFields} from "./settings.model";

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
    public navMenuItems = settingsNavMenuItems;

    public profileForm: FormRendererModel = {
        fields: profileFields,
        form: createFormGroupByFields(profileFields),
    };
}
