import {NgModule} from "@angular/core";
import {EmptyContentComponent} from "./empty-content.component";

@NgModule({
    declarations: [
        EmptyContentComponent,
    ],
    exports: [
        EmptyContentComponent,
    ],
    imports: [],
})
export class EmptyContentModule {
}
