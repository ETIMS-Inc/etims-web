import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {
    DetailControlType,
    detailsControls,
    DetailsHeaderItem,
} from "./course-details-header.model";

@Component({
    selector: "ets-course-details-header",
    templateUrl: "./course-details-header.component.html",
    styleUrls: ["./course-details-header.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsHeaderComponent {

    public detailControls: DetailsHeaderItem[] = detailsControls;

    public handleControlsChange(controlType: DetailControlType): void {
        switch (controlType) {
            case "share":
                console.log("share clicked");
                break;
            case "bookmark":
                console.log("bookmark clicked");
                break;
        }
    }
}
