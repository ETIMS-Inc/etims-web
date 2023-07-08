import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
    RouterModule,
    Routes,
} from "@angular/router";
import {AccountStarterPageComponent} from "./account-starter-page.component";

const routes: Routes = [
    {path: "", component: AccountStarterPageComponent},
];

@NgModule({
    declarations: [
        AccountStarterPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
})
export class AccountStarterPageModule {
}
