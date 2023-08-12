import {MenuItem} from "primeng/api";

export type DetailControlType =
    | "bookmark"
    | "share"

export type DetailsHeaderItem = MenuItem & {
    type: DetailControlType;
};

export const detailsControls: DetailsHeaderItem[] = [
    {
        type: "share",
        icon: "pi pi-share-alt",
        styleClass: "p-button-rounded p-button-secondary p-button-outlined",
    },
    {
        type: "bookmark",
        icon: "pi pi-bookmark",
        styleClass: "p-button-rounded p-button-secondary p-button-outlined",
    },
];
