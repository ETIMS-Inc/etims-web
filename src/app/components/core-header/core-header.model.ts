import {MenuItem} from "primeng/api";

export type ButtonType =
    | "message"
    | "notification"
    | "avatar";

export type BadgeSeverity =
    | "info"
    | "danger";

export type MenuItemType = MenuItem & {
    type?: ButtonType,
    amount?: number,
    severity?: BadgeSeverity,
};

export const navTabsList: MenuItemType[] = [
    {
        icon: "message",
        styleClass: "p-button-rounded p-button-text",
        type: "message",
        severity: "danger",
    },
    {
        icon: "bell",
        styleClass: "p-button-rounded p-button-text",
        type: "notification",
        severity: "info",
    },
    {
        icon: "avatar",
        styleClass: "p-button-outlined p-button-secondary",
        type: "avatar",
    },
];
