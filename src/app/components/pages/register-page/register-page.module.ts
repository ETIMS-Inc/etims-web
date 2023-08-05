import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {LoginPageComponent} from "../login-page";
import {RegisterPageComponent} from "./register-page.component";
import {ButtonModule} from "primeng/button";
import {AngularSvgIconModule} from "angular-svg-icon";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";

const routes: Routes = [
    {path: "", component: RegisterPageComponent},
];

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
        RouterModule.forChild(routes),
    ]
})
export class RegisterPageModule {
}
