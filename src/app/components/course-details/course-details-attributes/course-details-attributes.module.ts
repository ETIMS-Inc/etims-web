import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CourseDetailsAttributesComponent} from "./course-details-attributes.component";

@NgModule({
    declarations: [
        CourseDetailsAttributesComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
    ],
    exports: [
        CourseDetailsAttributesComponent,
    ],
})
export class CourseDetailsAttributesModule {
}
