import {MenuItem} from "primeng/api";

export type HeaderMenuItemType = MenuItem & {
    onClick?: () => void,
};

export const primaryNavTabsList: MenuItem[] = [
    {label: "Home"},
    {label: "Features"},
    {label: "Plans"},
    {label: "Documentation"},
];

export const secondaryNavTabsList: HeaderMenuItemType[] = [
    {
        id: "search",
        icon: "pi pi-search",
        styleClass: "p-button-rounded p-button-secondary p-button-text p-button-lg",
    },
    {
        id: "globe",
        icon: "pi pi-globe",
        styleClass: "p-button-rounded p-button-secondary p-button-text p-button-lg",
    },
    {
        id: "sun",
        icon: "pi pi-sun",
        styleClass: "p-button-rounded p-button-secondary p-button-text p-button-lg",
    },
    {
        id: "start",
        label: "Get Started",
        styleClass: "p-button-rounded",
    },
];
