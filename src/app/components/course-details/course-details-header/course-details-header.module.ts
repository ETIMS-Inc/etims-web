import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CourseDetailsHeaderComponent} from "./course-details-header.component";

@NgModule({
    declarations: [
        CourseDetailsHeaderComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
    ],
    exports: [
        CourseDetailsHeaderComponent,
    ],
})
export class CourseDetailsHeaderModule {
}
