import {
    Component,
    Input,
} from "@angular/core";
import * as tinycolor from "tinycolor2";
import {Chip} from "./chip.model";
import {generateColor} from "./chip.utils";

@Component({
    selector: "ets-course-tag",
    templateUrl: "./chip.component.html",
    styleUrls: ["./chip.component.less"],
})
export class ChipComponent {
    private _tag: Chip;

    get tag(): Chip {
        return this._tag;
    }

    @Input()
    set tag(value: Chip) {
        this._tag = {
            ...value,
            color: tinycolor(value.color).isValid()
                ? tinycolor(value.color).toHexString()
                : generateColor(value.name),
        };
    }
}
