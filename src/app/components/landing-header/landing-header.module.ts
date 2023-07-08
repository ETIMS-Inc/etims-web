import {NgModule} from '@angular/core';
import {LandingHeaderComponent} from "./landing-header.component";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {MenuModule} from "primeng/menu";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ListboxModule} from "primeng/listbox";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FormsModule} from "@angular/forms";

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
    ]
})
export class LandingHeaderModule {
}
