import {FormGroup} from "@angular/forms";
import {FormFieldModel} from "./form-field/form-field.model";

export interface FormRendererModel {
    fields: FormFieldModel[],
    form: FormGroup,
}
