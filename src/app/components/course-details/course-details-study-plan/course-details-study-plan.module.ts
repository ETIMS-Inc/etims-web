import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import {CourseDetailsStudyPlanComponent} from "./course-details-study-plan.component";

@NgModule({
    declarations: [
        CourseDetailsStudyPlanComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        AccordionModule,
    ],
    exports: [
        CourseDetailsStudyPlanComponent,
    ],
})
export class CourseDetailsStudyPlanModule {
}
