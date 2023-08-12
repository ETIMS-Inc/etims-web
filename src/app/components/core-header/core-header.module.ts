import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {I18NextModule} from "angular-i18next";
import {AngularSvgIconModule} from "angular-svg-icon";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CoreHeaderComponent} from "./core-header.component";
import {InputTextModule} from "primeng/inputtext";
import {AlertPopupModule} from "./alert-popup/alert-popup.module";
import {LibModule} from "../lib/lib.module";

@NgModule({
    declarations: [
        CoreHeaderComponent,
    ],
    exports: [
        CoreHeaderComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        MenubarModule,
        AngularSvgIconModule,
        AvatarModule,
        ButtonModule,
        BadgeModule,
        InputTextModule,
        OverlayPanelModule,
        MenuModule,
        AlertPopupModule,
        I18NextModule,
        LibModule,
    ],
})
export class CoreHeaderModule {
}
