import {Validators} from "@angular/forms";
import {
    FormFieldModel,
    FormFieldType,
} from "../../lib/form/form-field/form-field.model";

export const profileFields: FormFieldModel[] = [
    {
        controlName: "firstName",
        type: FormFieldType.STRING,
        label: "First Name", // TODO: translate
        required: true,
        validators: [Validators.required],
    },
    {
        controlName: "lastName",
        type: FormFieldType.STRING,
        label: "Last Name", // TODO: translate
        required: true,
        validators: [Validators.required],
    },
    {
        controlName: "username",
        type: FormFieldType.STRING,
        label: "Username", // TODO: translate
    },
    {
        controlName: "bio",
        type: FormFieldType.TEXT_AREA,
        label: "Bio", // TODO: translate
    },
    {
        controlName: "email",
        type: FormFieldType.EMAIL,
        label: "Email", // TODO: translate
        required: true,
        validators: [
            Validators.required,
            Validators.email,
        ],
    },
];
