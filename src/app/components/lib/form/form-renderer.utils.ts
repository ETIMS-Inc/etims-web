import {
    FormControl,
    FormGroup,
} from "@angular/forms";
import {FormFieldDropdownOptionModel} from "./form-field/form-field-dropdown-option.model";
import {
    FormFieldModel,
    FormFieldType,
} from "./form-field/form-field.model";
import {FormRendererModel} from "./form-renderer.model";

export function createFormGroupByFields(fields: FormFieldModel[]): FormGroup {
    const controls: Record<string, FormControl> = {};
    fields.forEach(field => {
        switch (field.type) {
            case FormFieldType.CHECKBOX:
                controls[field.controlName] = new FormControl<boolean | null>(field.defaultValue as boolean, field.validators);
                break;
            case FormFieldType.DROPDOWN:
                controls[field.controlName] = new FormControl<FormFieldDropdownOptionModel[] | null>(field.defaultValue as FormFieldDropdownOptionModel[], field.validators);
                break;
            case FormFieldType.NUMBER:
                controls[field.controlName] = new FormControl<number | null>(field.defaultValue as number, field.validators);
                break;
            case FormFieldType.EMAIL:
            case FormFieldType.PASSWORD:
            case FormFieldType.PHONE_NUMBER:
            case FormFieldType.STRING:
            case FormFieldType.TEXT_AREA:
            default:
                controls[field.controlName] = new FormControl<string | null>(field.defaultValue as string, field.validators);
                break;
        }
    });
    return new FormGroup(controls);
}

export const getRendererForm = (fields: FormFieldModel[]): FormRendererModel =>
    ({
        fields: fields,
        form: createFormGroupByFields(fields),
    });
