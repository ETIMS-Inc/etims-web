import {
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import tinycolor from "tinycolor2";
import {Chip} from "./chip.model";
import {generateColor} from "./chip.utils";

@Component({
    selector: "ets-course-tag",
    templateUrl: "./chip.component.html",
    styleUrls: ["./chip.component.less"],
})
export class ChipComponent {
    @Output() public clicked = new EventEmitter();
    public _tag: Chip;

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
