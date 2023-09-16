import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CourseDetailsCatalogModule} from "../course-details-catalog/course-details-catalog.module";
import {CourseDetailsAttributesComponent} from "./course-details-attributes.component";
import {AvatarModule} from "primeng/avatar";

@NgModule({
    declarations: [
        CourseDetailsAttributesComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        AvatarModule,
        CourseDetailsCatalogModule,
    ],
    exports: [
        CourseDetailsAttributesComponent,
    ],
})
export class CourseDetailsAttributesModule {
}
