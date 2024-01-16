import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {I18NextModule} from "angular-i18next";

@Component({
    selector: "ets-label",
    standalone: true,
    imports: [
        CommonModule,
        I18NextModule,
    ],
    templateUrl: "./label.component.html",
    styleUrls: ["./label.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
    @Input({required: true}) public value: string;
    @Input() public required: boolean;
}
