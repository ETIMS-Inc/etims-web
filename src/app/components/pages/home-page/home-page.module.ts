import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PanelModule} from "primeng/panel";
import {ChipComponent} from "../../lib/chip/chip.component";
import {DotComponent} from "../../lib/dot/dot.component";
import {IconComponent} from "../../lib/icon/icon.component";
import {HomePageComponent} from "./home-page.component";
import {GalleriaModule} from "primeng/galleria";
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {InputMaskModule} from "primeng/inputmask";

const routes: Routes = [
    {path: "", component: HomePageComponent},
];

@NgModule({
    declarations: [
        HomePageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GalleriaModule,
        ButtonModule,
        I18NextModule,
        CardModule,
        IconComponent,
        PanelModule,
        ChipComponent,
        TagModule,
        DotComponent,
        InputMaskModule,
        InputTextModule,
    ],
})
export class HomePageModule {
}
