import {SettingsTabs} from "./settings.model";

export const getSettingsTabByPath = (path: string): SettingsTabs => {
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1] as SettingsTabs;
    return Object.values(SettingsTabs).includes(lastSegment) ? lastSegment : SettingsTabs.Profile;
};
