import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CourseDetailsMetricsComponent} from "./course-details-metrics.component";
import {LibModule} from "../../lib/lib.module";

@NgModule({
    declarations: [
        CourseDetailsMetricsComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        LibModule,
    ],
    exports: [
        CourseDetailsMetricsComponent,
    ],
})
export class CourseDetailsMetricsModule {
}
