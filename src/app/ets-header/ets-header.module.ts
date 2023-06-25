import {NgModule} from '@angular/core';
import {EtsHeaderComponent} from "./ets-header.component";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        EtsHeaderComponent,
    ],
    exports: [
        EtsHeaderComponent,
    ],
    imports: [
        CommonModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        AngularSvgIconModule,
        MenubarModule,
        InputTextModule,
    ]
})
export class EtsHeaderModule {
}
