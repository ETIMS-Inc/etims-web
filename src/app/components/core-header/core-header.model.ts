import {MenuItem} from "primeng/api";

export enum ButtonType {
    avatar,
    message,
    notification,
}

export type BadgeSeverity =
    | "info"
    | "danger";

export type MenuItemType = MenuItem & {
    type?: ButtonType,
    amount?: number,
    avatar?: string,
    severity?: BadgeSeverity,
};

export const navTabsList: MenuItemType[] = [
    {
        icon: "message",
        styleClass: "p-button-rounded p-button-text",
        type: ButtonType.message,
        severity: "danger",
    },
    {
        icon: "bell",
        styleClass: "p-button-rounded p-button-text",
        type: ButtonType.notification,
        severity: "info",
    },
    {
        icon: "avatar",
        styleClass: "p-button-outlined p-button-secondary",
        type: ButtonType.avatar,
    },
];

/**
 * Mock data, need to recheck them
 */
export const userMenuList: MenuItem[] = [
    {
        label: "Options",
        items: [
            {
                label: "Update",
                icon: "pi pi-refresh",
            },
            {
                label: "Delete",
                icon: "pi pi-times",
            },
        ],
    },
    {
        label: "Navigate",
        items: [
            {
                label: "Angular",
                icon: "pi pi-external-link",
                url: "http://angular.io",
            },
            {
                label: "Router",
                icon: "pi pi-upload",
                routerLink: "/fileupload",
            },
        ],
    },
];
