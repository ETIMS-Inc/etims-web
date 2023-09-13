import {NgStyle} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from "@angular/core";
import tinycolor from "tinycolor2";
import {Chip} from "./chip.model";
import {generateColor} from "./chip.utils";

@Component({
    selector: "ets-chip",
    templateUrl: "./chip.component.html",
    styleUrls: ["./chip.component.less"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgStyle,
    ],
})
export class ChipComponent {
    @Output() public clicked = new EventEmitter();
    public chipUse: Chip;

    @Input()
    set chip(value: Chip) {
        this.chipUse = {
            ...value,
            color: tinycolor(value.color).isValid()
                ? tinycolor(value.color).toHexString()
                : generateColor(value.label.toString()),
        };
    }
}
