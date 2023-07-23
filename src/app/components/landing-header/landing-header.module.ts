import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AngularSvgIconModule} from "angular-svg-icon";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ListboxModule} from "primeng/listbox";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {SplitButtonModule} from "primeng/splitbutton";
import {ToolbarModule} from "primeng/toolbar";
import {LandingHeaderComponent} from "./landing-header.component";
import {TabMenuModule} from "primeng/tabmenu";
import {I18NextModule} from "angular-i18next";

@NgModule({
    declarations: [
        LandingHeaderComponent,
    ],
    exports: [
        LandingHeaderComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        AngularSvgIconModule,
        MenubarModule,
        InputTextModule,
        MenuModule,
        OverlayPanelModule,
        ListboxModule,
        ScrollPanelModule,
        TabMenuModule,
        I18NextModule,
    ],
})
export class LandingHeaderModule {
}
