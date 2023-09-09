import {etsIconList} from "./icons.list";

export type EtcIconType = typeof etsIconList[number] | string;

export enum EtcIconMode {
    FILL = "fill",
    STROKE = "stroke",
    COLORFUL = "colorful",
}
