import {NgModule} from "@angular/core";
import {AccountCardComponent} from "./account-card";

@NgModule({
    declarations: [
        AccountCardComponent,
    ],
    exports: [
        AccountCardComponent,
    ],
})
export class SharedModule {
}
