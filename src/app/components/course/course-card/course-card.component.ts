import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import {CourseCard} from "./course-card.model";

export enum CourseCardDisplayMode {
    FULL_WIDTH = "full-width",
    TILE = "tile",
}

@Component({
    selector: "ets-course-card",
    templateUrl: "./course-card.component.html",
    styleUrls: ["./course-card.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
    @Input() public card: CourseCard;
    @Input() public mode: CourseCardDisplayMode = CourseCardDisplayMode.FULL_WIDTH;
    @Output() public previewClicked = new EventEmitter();
    public courseCardDisplayMode = CourseCardDisplayMode;
}
