import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {HomePageComponent} from "./home-page.component";
import {GalleriaModule} from "primeng/galleria";

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
    ],
})
export class HomePageModule {
}
