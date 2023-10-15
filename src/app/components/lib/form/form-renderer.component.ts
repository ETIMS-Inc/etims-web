import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormRendererModel} from "./form-renderer.model";

@Component({
    selector: "ets-form",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputTextareaModule,
    ],
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRendererComponent {
    @Input() public formRendererModel: FormRendererModel;
}
