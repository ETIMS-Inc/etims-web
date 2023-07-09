import {NgModule} from '@angular/core';
import {LoginPageComponent} from './login-page.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {AngularSvgIconModule} from "angular-svg-icon";
import {CommonModule} from "@angular/common";
import {PasswordModule} from "primeng/password";

@NgModule({
    declarations: [
        LoginPageComponent,
    ],
    exports: [
        LoginPageComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        AngularSvgIconModule,
        PasswordModule
    ]
})
export class LoginPageModule {
}
