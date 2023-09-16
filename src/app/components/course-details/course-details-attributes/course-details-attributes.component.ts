import {
    ChangeDetectionStrategy,
    Component,
} from "@angular/core";
import {courseAuthors} from "../../../mocks/course-authors";
import {CourseAuthor} from "./course-details-attributes.model";

@Component({
    selector: "ets-course-details-attributes",
    templateUrl: "./course-details-attributes.component.html",
    styleUrls: ["./course-details-attributes.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetailsAttributesComponent {

    public courseAuthors: CourseAuthor[] = courseAuthors;
}
