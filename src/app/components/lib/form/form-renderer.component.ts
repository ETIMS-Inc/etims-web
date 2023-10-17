import {CommonModule} from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {I18NextModule} from "angular-i18next";
import {CheckboxModule} from "primeng/checkbox";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {PasswordModule} from "primeng/password";
import {LabelComponent} from "../label/label.component";
import {FormFieldType} from "./form-field/form-field.model";
import {FormRendererModel} from "./form-renderer.model";

@Component({
    selector: "ets-form",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputTextareaModule,
        InputTextModule,
        PasswordModule,
        InputNumberModule,
        CheckboxModule,
        I18NextModule,
        LabelComponent,
    ],
    templateUrl: "./form-renderer.component.html",
    styleUrls: ["./form-renderer.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRendererComponent {
    @Input() public formRendererModel: FormRendererModel;
    public formFieldType = FormFieldType;
}
