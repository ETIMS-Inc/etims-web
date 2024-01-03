import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {ButtonModule} from "primeng/button";
import {CourseDetailsPreviewMediaComponent} from "./course-details-preview-media.component";

@NgModule({
    declarations: [
        CourseDetailsPreviewMediaComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        VgCoreModule,
    ],
    exports: [
        CourseDetailsPreviewMediaComponent,
    ],
})
export class CourseDetailsPreviewMediaModule {
}
