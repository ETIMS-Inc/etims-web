import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import {I18NextModule} from "angular-i18next";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ChipComponent} from "../../lib/chip/chip.component";
import {ProgressBarComponent} from "../../lib/progress-bar/progress-bar.component";
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
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        I18NextModule,
        DividerModule,
        ChipComponent,
        ProgressBarComponent,
    ],
})
export class CourseCardComponent {
    @Input() public card: CourseCard;
    @Input() public mode: CourseCardDisplayMode = CourseCardDisplayMode.FULL_WIDTH;
    @Output() public previewClicked = new EventEmitter();
    public courseCardDisplayMode = CourseCardDisplayMode;
}
