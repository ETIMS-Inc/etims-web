import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RegisterPageComponent} from "./register-page.component";
import {ButtonModule} from "primeng/button";
import {AngularSvgIconModule} from "angular-svg-icon";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        RegisterPageComponent,
    ],
    exports: [
        RegisterPageComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        AngularSvgIconModule,
        PasswordModule,
        InputTextModule,
    ]
})
export class RegisterPageModule {
}
