import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {IconComponent} from "../../lib/icon/icon.component";
import {CourseDetailsMetricsComponent} from "./course-details-metrics.component";

@NgModule({
    declarations: [
        CourseDetailsMetricsComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        IconComponent,
    ],
    exports: [
        CourseDetailsMetricsComponent,
    ],
})
export class CourseDetailsMetricsModule {
}
