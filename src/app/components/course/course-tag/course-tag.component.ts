import {
    Component,
    Input,
} from "@angular/core";
import * as tinycolor from "tinycolor2";
import {CourseTag} from "./course-tag.model";
import {generateColor} from "./course-tag.utils";

@Component({
    selector: "ets-course-tag",
    templateUrl: "./course-tag.component.html",
    styleUrls: ["./course-tag.component.less"],
})
export class CourseTagComponent {
    private _tag: CourseTag;

    get tag(): CourseTag {
        return this._tag;
    }

    @Input()
    set tag(value: CourseTag) {
        this._tag = {
            ...value,
            color: tinycolor(value.color).isValid()
                ? tinycolor(value.color).toHexString()
                : generateColor(value.name),
        };
    }
}
