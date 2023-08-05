import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AvatarModule} from "primeng/avatar";
import {PreviewItemComponent} from "./preview-item.component";
import {BadgeModule} from "primeng/badge";
import {PreviewItemPipe} from "./preview-item.pipe";

@NgModule({
    declarations: [
        PreviewItemPipe,
        PreviewItemComponent,
    ],
    exports: [
        PreviewItemComponent,
        PreviewItemPipe,
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
