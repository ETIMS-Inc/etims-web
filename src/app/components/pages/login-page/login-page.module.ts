import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {LoginPageComponent} from './login-page.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CommonModule} from "@angular/common";
import {PasswordModule} from "primeng/password";

const routes: Routes = [
    {path: "", component: LoginPageComponent},
];

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
        PasswordModule,
        RouterModule.forChild(routes),
    ]
})
export class LoginPageModule {
}
