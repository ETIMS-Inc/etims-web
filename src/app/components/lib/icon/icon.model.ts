import {etsIconList} from "./icons.list";

export type EtcIcon = typeof etsIconList[number] | string;

export enum EtsIconMode {
    FILL = "fill",
    STROKE = "stroke",
    COLORFUL = "colorful",
}
