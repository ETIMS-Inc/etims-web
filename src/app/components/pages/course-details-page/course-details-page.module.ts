import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CourseDetailsAttributesModule} from "../../course-details/course-details-attributes/course-details-attributes.module";
import {CourseDetailsHeaderModule} from "../../course-details/course-details-header/course-details-header.module";
import {CourseDetailsPreviewMediaModule} from "../../course-details/course-details-preview-media/course-details-preview-media.module";
import {CourseDetailsStudyPlanModule} from "../../course-details/course-details-study-plan/course-details-study-plan.module";
import {CourseDetailsPageRoutingModule} from "./course-details-page-routing.module";
import {CourseDetailsPageComponent} from "./course-details-page.component";
import {CourseDetailsOverviewModule} from "../../course-details/course-details-overview/course-details-overview.module";
import {CourseDetailsMetricsModule} from "../../course-details/course-details-metrics/course-details-metrics.module";

@NgModule({
    declarations: [
        CourseDetailsPageComponent,
    ],
    imports: [
        CommonModule,
        CourseDetailsPageRoutingModule,
        CourseDetailsHeaderModule,
        CourseDetailsOverviewModule,
        CourseDetailsStudyPlanModule,
        CourseDetailsMetricsModule,
        CourseDetailsAttributesModule,
        CourseDetailsPreviewMediaModule,
    ],
})
export class CourseDetailsPageModule {
}
