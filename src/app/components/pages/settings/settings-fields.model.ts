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

export const privacyFields: FormFieldModel[] = [
    {
        controlName: "profileVisibility",
        type: FormFieldType.DROPDOWN,
        label: "Profile", // TODO: translate
        required: false,
        options: [
            {
                label: "Hidden",
                value: "hidden",
            },
            {
                label: "Visible",
                value: "visible",
            },
        ],
    },
    {
        controlName: "friendsListVisibility",
        type: FormFieldType.DROPDOWN,
        label: "Friends List", // TODO: translate
        required: false,
        options: [
            {
                label: "Hidden",
                value: "hidden",
            },
            {
                label: "Visible",
                value: "visible",
            },
        ],
    },
    {
        controlName: "whoCanWriteMe",
        type: FormFieldType.DROPDOWN,
        options: [
            {
                label: "Nobody",
                value: "nobody",
            },
            {
                label: "Everyone",
                value: "everyone",
            },
            {
                label: "Friends",
                value: "friends",
            },
        ],
        label: "Who can write me", // TODO: translate
    },
    {
        controlName: "whoCanInviteMe",
        type: FormFieldType.DROPDOWN,
        options: [
            {
                label: "Nobody",
                value: "nobody",
            },
            {
                label: "Everyone",
                value: "everyone",
            },
            {
                label: "Friends",
                value: "friends",
            },
        ],
        label: "Who can invite me", // TODO: translate
    },
];

export const securityFields: FormFieldModel[] = [
    {
        controlName: "changeEmail",
        type: FormFieldType.EMAIL,
        label: "Email", // TODO: translate
        required: false,
    },
];
