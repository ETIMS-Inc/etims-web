import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {IconComponent} from "../../lib/icon/icon.component";
import {IconsPageRoutingModule} from "./icons-page-routing.module";
import {IconsPageComponent} from "./icons-page.component";

@NgModule({
    declarations: [
        IconsPageComponent,
    ],
    imports: [
        CommonModule,
        IconsPageRoutingModule,
        IconComponent,
    ],
})
export class IconsPageModule {
}
