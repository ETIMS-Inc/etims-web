import {ValidatorFn} from "@angular/forms";
import {Observable} from "rxjs";
import {FormFieldDropdownOptionModel} from "./form-field-dropdown-option.model";

export enum FormFieldType {
    STRING,
    NUMBER,
    PHONE_NUMBER,
    TEXT_AREA,
    CHECKBOX,
    PASSWORD,
    EMAIL,
    DROPDOWN,
}

interface DefaultFormFieldModel {
    controlName: string,
    type: FormFieldType,
    label?: string,
    defaultValue?: unknown,
    required?: boolean,
    labelPosition?: "top" | "left", // TODO: add right pos to template
    disabled?: boolean,
    hidden?: boolean,
    validators?: ValidatorFn | ValidatorFn[],
}

interface DropdownFormFieldModel extends DefaultFormFieldModel{
    options?: FormFieldDropdownOptionModel[],
}

export type FormFieldModel = DefaultFormFieldModel | DropdownFormFieldModel;
