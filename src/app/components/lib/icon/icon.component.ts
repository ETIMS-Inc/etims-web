import {NgIf} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
} from "@angular/core";
import {
    EtcIconMode,
    EtcIconType,
} from "./icon.model";

@Component({
    selector: "ets-icon",
    templateUrl: "./icon.component.html",
    styleUrls: ["./icon.component.less"],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf,
    ],
})
export class IconComponent {
    @HostBinding("class") public hostClass = "ets-icon";
    @Input() public icon: EtcIconType;
    @Input() public viewBox: string = "0 0 1 1";
    private iconMode: EtcIconMode = EtcIconMode.FILL;
    private defaultIconColor = "#30334D";
    private defaultStrokeWidth = "1.5";

    @HostBinding("style.fill") private fill: string = `var(--ets-icon-color, ${this.defaultIconColor})`;
    @HostBinding("style.stroke") private stroke: string = undefined;
    @HostBinding("style.stroke-width") private strokeWidth: string = undefined;

    @Input()
    set mode(value: EtcIconMode) {
        this.iconMode = value;

        switch (value) {
            case EtcIconMode.COLORFUL:
                this.updateStyles();
                break;
            case EtcIconMode.FILL:
                this.updateStyles(`var(--ets-icon-color, ${this.defaultIconColor})`);
                break;
            case EtcIconMode.STROKE:
                this.updateStyles("none", `var(--ets-icon-color, ${this.defaultIconColor})`, `var(--ets-icon-stroke-width, ${this.defaultStrokeWidth})`);
        }
    }

    private updateStyles(fill: string = undefined, stroke: string = undefined, strokeWidth: string = undefined) {
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
}
