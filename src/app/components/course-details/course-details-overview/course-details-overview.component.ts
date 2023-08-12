import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {
    DetailsTabPanel,
    tabPanels,
} from "./course-details-overview.model";

@Component({
    selector: "ets-course-details-overview",
    templateUrl: "./course-details-overview.component.html",
    styleUrls: ["./course-details-overview.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsOverviewComponent {

    public tabPanels: DetailsTabPanel[] = tabPanels;
}
