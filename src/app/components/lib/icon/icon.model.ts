import {etsIconList} from "./icons.list";

export type EtcIconType = typeof etsIconList[number] | string;

export enum EtsIconMode {
    FILL = "fill",
    STROKE = "stroke",
    COLORFUL = "colorful",
}
