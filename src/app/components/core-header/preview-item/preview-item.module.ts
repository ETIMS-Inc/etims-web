import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AvatarModule} from "primeng/avatar";
import {PreviewItemComponent} from "./preview-item.component";
import {BadgeModule} from "primeng/badge";

@NgModule({
    declarations: [
        PreviewItemComponent,
    ],
    exports: [
        PreviewItemComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        AvatarModule,
        BadgeModule,
    ],
})
export class PreviewItemModule {
}
