import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {
    CourseDetails,
    courseDetailsItems,
} from "./course-details-metrics.model";

@Component({
    selector: "ets-course-details-metrics",
    templateUrl: "./course-details-metrics.component.html",
    styleUrls: ["./course-details-metrics.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsMetricsComponent {

    public overviewItems: CourseDetails[] = courseDetailsItems;
}
