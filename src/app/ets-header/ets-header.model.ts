import {MenuItem} from "primeng/api";

export interface Language {
    name: string;
    code: string;
    icon: string;
}

export type ActionType =
    | "search"
    | "globe"
    | "theme"
    | "start";

export type HeaderMenuItemType = MenuItem & {
    type?: ActionType,
};

export const primaryNavTabsList: MenuItem[] = [
    {label: "Home"},
    {label: "Features"},
    {label: "Plans"},
    {label: "Documentation"},
];

export const secondaryNavTabsList: HeaderMenuItemType[] = [
    {
        icon: "pi pi-search",
        styleClass: "p-button-rounded p-button-secondary p-button-text p-button-lg",
        type: "search",
    },
    {
        icon: "pi pi-globe",
        styleClass: "p-button-rounded p-button-secondary p-button-text p-button-lg",
        type: "globe",
    },
    {
        icon: "pi pi-sun",
        styleClass: "p-button-rounded p-button-secondary p-button-text p-button-lg",
        type: "theme",
    },
    {
        label: "Get Started",
        styleClass: "p-button-rounded",
        type: "start",
    },
];

export const languageList: Language[] = [
    { name: 'English', code: 'EN', icon: 'english' },
    { name: 'German', code: 'DE', icon: 'germany' },
    { name: 'Ukrainian', code: 'UK', icon: 'ukraine' },
];

export const defaultLanguage: Language = { name: 'English', code: 'EN', icon: 'english' };
