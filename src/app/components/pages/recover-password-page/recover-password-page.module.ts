import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {RecoverPasswordPageComponent} from "./recover-password-page.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {I18NextModule} from "angular-i18next";
import {CardModule} from "primeng/card";

const routes: Routes = [
    {path: "", component: RecoverPasswordPageComponent},
];

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
        PasswordModule,
        I18NextModule,
        CardModule,
        RouterModule.forChild(routes),
    ]
})
export class RecoverPasswordPageModule {
}
