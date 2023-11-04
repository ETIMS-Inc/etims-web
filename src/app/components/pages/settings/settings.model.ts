import {FormFieldModel} from "../../lib/form/form-field/form-field.model";
import {
    privacyFields,
    profileFields,
    securityFields,
} from "./settings-fields.model";

export enum SettingsTabs {
    Profile = "profile",
    Privacy = "privacy",
    Security = "security",
    Notifications = "notifications",
    Integrations = "integrations",
}

export const settingsNavFormFields: Record<SettingsTabs, FormFieldModel[]> = {
    [SettingsTabs.Profile]: profileFields,
    [SettingsTabs.Privacy]: privacyFields,
    [SettingsTabs.Security]: securityFields,
    [SettingsTabs.Notifications]: profileFields,
    [SettingsTabs.Integrations]: [],
};
