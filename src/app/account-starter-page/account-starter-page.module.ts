import {NgModule} from '@angular/core';
import { AccountStarterPageComponent } from './account-starter-page.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        AccountStarterPageComponent,
    ],
    exports: [
        AccountStarterPageComponent,
    ],
    imports: [
        ButtonModule,
        InputTextModule
    ]
})
export class AccountStarterPageModule {
}
