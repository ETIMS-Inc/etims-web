import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {LibModule} from "../../lib/lib.module";
import {RegisterPageComponent} from "./register-page.component";
import {ButtonModule} from "primeng/button";
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
        PasswordModule,
        InputTextModule,
        RouterModule.forChild(routes),
        LibModule,
    ],
})
export class RegisterPageModule {
}
