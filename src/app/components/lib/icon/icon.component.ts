import {NgIf} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
} from "@angular/core";
import {
    EtcIcon,
    EtsIconMode,
} from "./icon.model";
import {
    etsColoredIconList,
    etsSimpleIconList,
    etsStrokeIconList,
} from "./icons.list";

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
    @Input() public viewBox: string = "0 0 1 1";
    public etsIcon: EtcIcon;
    private iconMode: EtsIconMode = EtsIconMode.FILL;
    private defaultIconColor = "#30334D";
    private defaultStrokeWidth = "1.5";

    @HostBinding("style.fill") private fill: string = `var(--ets-icon-color, ${this.defaultIconColor})`;
    @HostBinding("style.stroke") private stroke: string = undefined;
    @HostBinding("style.stroke-width") private strokeWidth: string = undefined;

    @Input()
    set icon(value: EtcIcon) {
        this.etsIcon = value;

        if (etsSimpleIconList.includes(value as typeof etsSimpleIconList[number])) {
            this.mode = EtsIconMode.FILL;
        } else if (etsColoredIconList.includes(value as typeof etsColoredIconList[number])) {
            this.mode = EtsIconMode.COLORFUL;
        } else if (etsStrokeIconList.includes(value as typeof etsStrokeIconList[number])) {
            this.mode = EtsIconMode.STROKE;
        }
    }

    set mode(value: EtsIconMode) {
        this.iconMode = value;

        switch (value) {
            case EtsIconMode.COLORFUL:
                this.updateStyles();
                break;
            case EtsIconMode.FILL:
                this.updateStyles(`var(--ets-icon-color, ${this.defaultIconColor})`);
                break;
            case EtsIconMode.STROKE:
                this.updateStyles("none", `var(--ets-icon-color, ${this.defaultIconColor})`, `var(--ets-icon-stroke-width, ${this.defaultStrokeWidth})`);
        }
    }

    private updateStyles(fill: string = undefined, stroke: string = undefined, strokeWidth: string = undefined) {
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
}
