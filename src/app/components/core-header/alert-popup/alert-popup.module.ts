import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {PreviewItemModule} from "../preview-item/preview-item.module";
import {AlertPopupComponent} from "./alert-popup.component";

@NgModule({
    declarations: [
        AlertPopupComponent,
    ],
    exports: [
        AlertPopupComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        PreviewItemModule,
        ButtonModule,
        I18NextModule,
    ],
})
export class AlertPopupModule {
}
