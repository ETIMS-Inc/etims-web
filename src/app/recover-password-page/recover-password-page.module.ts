import {NgModule} from '@angular/core';
import {RecoverPasswordPageComponent} from "./recover-password-page.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

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
        SharedModule
    ]
})
export class RecoverPasswordPageModule {
}
