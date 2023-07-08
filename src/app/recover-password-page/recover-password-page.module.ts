import {NgModule} from '@angular/core';
import {RecoverPasswordPageComponent} from "./recover-password-page.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {PasswordModule} from "primeng/password";
import {I18NextModule} from "angular-i18next";
import {CardModule} from "primeng/card";

@NgModule({
    declarations: [
        RecoverPasswordPageComponent,
    ],
    exports: [
        RecoverPasswordPageComponent,
    ],
    imports: [
        ButtonModule,
        CommonModule,
        InputTextModule,
        SharedModule,
        PasswordModule,
        I18NextModule,
        CardModule
    ]
})
export class RecoverPasswordPageModule {
}
